import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';

import StateComponent from '~/components/StateComponent';

test(`renders StateComponent`, () => {
    const {getByLabelText} = render(React.createElement(StateComponent));

    expect(getByLabelText('Checkbox').type).toBe('checkbox');
});

test('StateComponent Checkbox change', () => {
    const {getByLabelText} = render(React.createElement(StateComponent));

    fireEvent.change(getByLabelText('Checkbox'), {
        target: {
            checked: true
        }
    });

    expect(getByLabelText('Checkbox').checked).toBe(true);

    fireEvent.change(getByLabelText('Checkbox'), {
        target: {
            checked: false
        }
    });

    expect(getByLabelText('Checkbox').checked).toBe(false);
});
