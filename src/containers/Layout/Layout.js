import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  // AppBreadcrumb,
  AppFooter,
  AppHeader,
} from '../../Themes/IBVN';

// sidebar nav config
// import navigation from '../../_nav';

// routes config
import routes from '../../routes';

import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render() {
    return (
      <div className="web">
        <AppHeader>
          <Header />
        </AppHeader>

        <div className="app-body">
          <main className="main">
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/" />

              </Switch>
          </main>

          <AppAside fixed hidden>
          <Aside />
          </AppAside>
        </div>
        
        <AppFooter>
          <Footer />
        </AppFooter>

      </div>
    );
  }
}

export default Layout;