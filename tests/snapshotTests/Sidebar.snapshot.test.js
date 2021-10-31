import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import Sidebar from '~/components/Sidebar';

test('Sidebar', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(Sidebar)));
    expect(component.toJSON()).toMatchSnapshot();
});
