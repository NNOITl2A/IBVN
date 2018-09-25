import React from 'react';
import Loadable from 'react-loadable';

import Home from './views/Home';

function Loading() {
    return <div>Loading...</div>;
}

const About = Loadable({
    loader: () => import('./views/About'),
    loading: Loading,
});

const Contact = Loadable({
    loader: () => import('./views/Contact'),
    loading: Loading,
});

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
];

export default routes;