import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import MainComponent from '~/components/MainComponent';

test('MainComponent', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(MainComponent)));
    expect(component.toJSON()).toMatchSnapshot();
});
