import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import StateComponent from '~/components/StateComponent';

test('StateComponent', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(StateComponent)));
    expect(component.toJSON()).toMatchSnapshot();
});
