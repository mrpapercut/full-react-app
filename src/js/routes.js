import loadable from '@loadable/component';

const App               = loadable(() => import(/* webpackChunkName: "App" */'~/components/App'));
const MainComponent     = loadable(() => import(/* webpackChunkName: "MainComponent" */'~/components/MainComponent'));
const ImageComponent    = loadable(() => import(/* webpackChunkName: "ImageComponent" */'~/components/ImageComponent'));
const StateComponent    = loadable(() => import(/* webpackChunkName: "StateComponent" */'~/components/StateComponent'));
const StoreComponent    = loadable(() => import(/* webpackChunkName: "StoreComponent" */'~/components/StoreComponent'));
const NotFound404       = loadable(() => import(/* webpackChunkName: "NotFound404" */'~/components/NotFound404'));

const routes = [{
    component: App,
    routes: [{
        path: '/',
        exact: true,
        component: MainComponent
    }, {
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
    }]
}];

export default routes;
