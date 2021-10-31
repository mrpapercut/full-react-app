import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import StoreComponent from '~/components/StoreComponent';

test('StoreComponent', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(StoreComponent)));
    expect(component.toJSON()).toMatchSnapshot();
});
