import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import NotFound404 from '~/components/NotFound404';

test('NotFound404', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(NotFound404)));
    expect(component.toJSON()).toMatchSnapshot();
});
