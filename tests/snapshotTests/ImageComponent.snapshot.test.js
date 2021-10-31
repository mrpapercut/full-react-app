import {createElement} from 'react';
import renderer from 'react-test-renderer';

import {wrapElementWithRouter} from '../util/snapshot-test-util';

import ImageComponent from '~/components/ImageComponent';

test('ImageComponent', () => {
    const component = renderer.create(wrapElementWithRouter(createElement(ImageComponent)));
    expect(component.toJSON()).toMatchSnapshot();
});
