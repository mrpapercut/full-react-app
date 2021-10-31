import {Component} from 'react';

import createElement from '~/util/createElement';

const [div, h2, label, span, input, button] = ['div', 'h2', 'label', 'span', 'input', 'button'].map(createElement);

class StateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            checkboxChecked: false
        };
    }

    render() {
        return div({
            className: 'statecomponent'
        },
            h2({
                className: 'pagetitle'
            }, 'State Component'),
            div({},
                label({
                    htmlFor: 'checkbox'
                },
                    span({}, 'Checkbox')
                ),
                input({
                    id: 'checkbox',
                    type: 'checkbox',
                    checked: this.state.checkboxChecked,
                    onChange: e => this.setState({
                        checkboxChecked: !this.state.checkboxChecked
                    })
                })
            )
        );
    }
}

export default StateComponent;
