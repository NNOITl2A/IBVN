import React from 'react';
import Loadable from 'react-loadable';

import Home from './Views/Home';

function Loading( a ) {

    console.log( 'Load Page:', a);

    return <div>Loading...</div>;
}

const About = Loadable({
    loader: () => import('./Views/About'),
    loading: Loading,
});

const Exibitor = Loadable({
    loader: () => import('./Views/Exibitor'),
    loading: Loading,
});

const Vistor = Loadable({
    loader: () => import('./Views/Vistor'),
    loading: Loading,
});

const Registration = Loadable({
    loader: () => import('./Views/Vistor/registration'),
    loading: Loading,
}); 

const Activities = Loadable({
    loader: () => import('./Views/Activities'),
    loading: Loading,
});

const News = Loadable({
    loader: () => import('./Views/News'),
    loading: Loading,
});

const Gallery = Loadable({
    loader: () => import('./Views/Gallery'),
    loading: Loading,
});

const Travel = Loadable({
    loader: () => import('./Views/Travel'),
    loading: Loading,
});


const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    
    { path: '/about', exact: true, name: 'About us', component: About },

    { path: '/exibitor', exact: true, name: 'Exibitor', component: Exibitor, items: [
        { path: '/exibitor/information', name: 'Exibitor Information' },
    ] },
    { path: '/exibitor/information', exact: true, component: Exibitor, backend: 1 },

    { path: '/vistor', exact: true, name: 'Vistor', component: Vistor, items: [
        { path: '/vistor/information', name: 'Vistor Information' },
        { path: '/vistor/registration', name: 'Pre-registration' }
    ] },
    { path: '/vistor/information', exact: true, component: Vistor, backend: 1 },
    { path: '/vistor/registration', exact: true, component: Registration, backend: 1 },

    { path: '/activities', exact: true, name: 'Activities', component: Activities },

    { path: '/news', exact: true, link:'/news', name: 'News', component: News },
    { path: '/news/:year/:month/:primary', link:'/news', name: 'News', component: News, backend: 1 },


    { path: '/gallery', exact: true, name: 'More', items: [
        { path: '/gallery', exact: true, name: 'Photo Gallery', component: Gallery },
        { path: '/travel', exact: true, name: 'Travel and Accommodation', component: Travel },
    ] },


    { path: '/gallery', exact: true, name: 'Photo Gallery', component: Gallery, more: 1 },

    { path: '/travel', exact: true, name: 'Travel and Accommodation', component: Travel, more: 1 },
];

export default routes;