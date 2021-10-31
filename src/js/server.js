import path from 'path';

import express from 'express';
import {createElement as E} from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {ChunkExtractor} from '@loadable/server';

import htmlTemplate from './util/htmlTemplate';

import routes from './routes';
import createStore from './reducers/createStore';

const config = require('../../config.json');

const port = config.serverPort;
const server = express();
const router = express.Router();

const store = createStore();
const preloadedState = `window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}`;

router.get('*', (req, res) => {
    const html = renderToString(
        E(Provider, {
            store
        },
            E(StaticRouter, {
                location: req.url,
                context: {}
            }, renderRoutes(routes))
        )
    );

    const chunkStatsFile = path.resolve(__dirname, '../../dist/loadable-stats.json');
    const extractor = new ChunkExtractor({statsFile: chunkStatsFile});

    const template = htmlTemplate({
        title: config.siteTitle || '',
        jsOutputFolder: config.jsOutputFolder,
        jsOutputFile: config.jsOutputFile,
        body: html,
        scriptTags: extractor.getScriptTags(),
        styleTags: extractor.getStyleTags(),
        preloadedState
    });

    res.send(template);
});

// Static folders
server.use('/dist', express.static('dist'));
server.use('/assets', express.static('assets'));

// HTTP Headers
server.use((req, res, next) => {
    // CORS
    res.append('Access-Control-Allow-Origin', '*');

    // Referrer-Policy
    res.append('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Blocks incorrect MIME-types
    res.append('X-Content-Type-Options', 'nosniff');

    // Disables Google FLoC (browser surveillance)
    res.append('Permissions-Policy', 'interest-cohort=()');

    next();
});

server.use(router);

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
