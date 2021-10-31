import {createElement} from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';

import createStore from '~/reducers/createStore';

const store = createStore();

const wrapCustomStore = customStore =>
    Object.assign({}, store, {
        getState: () => Object.assign({}, store.getState(), customStore)
    });

export const wrapElementWithRouter = (element, customStore = {}) =>
    wrapElement(createElement(MemoryRouter, {context: {}}, element), customStore);

export const wrapElement = (element, customStore = {}) =>
    createElement(Provider, {
        store: Object.keys(customStore).length > 0 ? wrapCustomStore(customStore) : store
    }, element);
