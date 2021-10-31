import {Component} from 'react';

import createElement from '~/util/createElement';

const [div, h2] = ['div', 'h2'].map(createElement);

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return div({
            className: 'maincomponent'
        },
            h2({
                className: 'pagetitle'
            }, 'Main Component')
        );
    }
}

export default MainComponent;
