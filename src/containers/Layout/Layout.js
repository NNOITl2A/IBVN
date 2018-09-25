import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  // AppBreadcrumb,
  AppFooter,
  AppHeader,
} from '../../Themes/IBVN';

// import {
//   AppAside,
//   AppBreadcrumb,
//   AppFooter,
//   AppHeader,
//   AppSidebar,
//   AppSidebarFooter,
//   AppSidebarForm,
//   AppSidebarHeader,
//   AppSidebarMinimizer,
//   AppSidebarNav,
// } from '@coreui/react';

// sidebar nav config
// import navigation from '../../_nav';
// routes config
// import routes from '../../routes';
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

        <main className="main">

        </main>

        <AppAside fixed hidden>
         <Aside />
        </AppAside>
        
        <AppFooter>
          <Footer />
        </AppFooter>

      </div>
    );
  }
}

export default Layout;