import {Component, createElement as E} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import loadable from '@loadable/component';

import {
    isLoading
} from '~/actions/mainActions';

import createElement from '~/util/createElement';

const Sidebar           = loadable(() => import(/* webpackChunkName: "Sidebar" */'~/components/Sidebar'));
const MainComponent     = loadable(() => import(/* webpackChunkName: "MainComponent" */'~/components/MainComponent'));
const ImageComponent    = loadable(() => import(/* webpackChunkName: "ImageComponent" */'~/components/ImageComponent'));
const StateComponent    = loadable(() => import(/* webpackChunkName: "StateComponent" */'~/components/StateComponent'));
const StoreComponent    = loadable(() => import(/* webpackChunkName: "StoreComponent" */'~/components/StoreComponent'));
const NotFound404       = loadable(() => import(/* webpackChunkName: "NotFound404" */'~/components/NotFound404'));

const [div] = ['div'].map(createElement);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            isLoading: this.props.isLoading
        };
    }

    render() {
        const unmappedRoutes = [{
            path: '/image',
            component: ImageComponent
        }, {
            path: '/state',
            component: StateComponent
        }, {
            path: '/store',
            component: StoreComponent
        }, {
            path: '*',
            component: NotFound404
        }];

        const mappedRoutes = unmappedRoutes.map((r, key) => {
            return E(Route, {
                path: r.path,
                render: () => E(r.component),
                key
            });
        });

        return [
            this.state.isLoading ? div({key: 'loader', id: 'loader'}) : null,
            E(Sidebar, {key: 'sidebar'}),
            div({
                key: 'mainwindow',
                className: 'mainwindow'
            },
                E(Switch, {
                    key: 'mainSwitch'
                },
                    E(Route, {
                        key: 'mainComponent',
                        path: '/',
                        exact: true,
                        render: () => E(MainComponent)
                    }),
                    mappedRoutes
                )
            )
        ];
    }
}

const mapStateToProps = ({mainReducer}) => {
    return {
        isLoading: mainReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLoading: bool => dispatch(isLoading(bool))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
