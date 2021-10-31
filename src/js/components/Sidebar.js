import {Component, createElement as E} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import createElement from '~/util/createElement';

const [div, h2] = ['div', 'h2'].map(createElement);

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    getLinks() {
        return [{
            to: '/',
            componentName: 'MainComponent'
        }, {
            to: '/image',
            componentName: 'ImageComponent'
        }, {
            to: '/state',
            componentName: 'StateComponent'
        }, {
            to: '/store',
            componentName: 'StoreComponent'
        }];
    }

    render() {
        const links = this.getLinks();

        return div({
            className: 'sidebar'
        },
            h2({
                className: 'sidebar-title'
            }, 'Sidebar'),
            links.map(({to, componentName}) => {
                return div({
                    className: 'sidebar-item'
                },
                    E(Link, {
                        to,
                        key: `link-${componentName.toLowerCase()}`
                    }, componentName)
                )
            })
        );
    }
}

const mapStateToProps = ({mainReducer}) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
