import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import App from '~/components/App';

test('App', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(App)));
    expect(component.toJSON()).toMatchSnapshot();
});

test('App with loader enabled', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(App), {
        mainReducer: {
            isLoading: true
        }
    }));
    expect(component.toJSON()).toMatchSnapshot();
});

test('App with loader disabled', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(App), {
        mainReducer: {
            isLoading: false
        }
    }));
    expect(component.toJSON()).toMatchSnapshot();
});
