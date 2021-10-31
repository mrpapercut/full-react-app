import {render} from '@testing-library/react';
import * as React from 'react';

import ImageComponent from '~/components/ImageComponent';

test(`renders ImageComponent`, () => {
    const rendered = render(React.createElement(ImageComponent));

    // console.log(rendered.debug());
});
