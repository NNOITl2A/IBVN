import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { GeolocatedProps, geolocated } from 'react-geolocated';

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


interface IDemoProps {
  label: string;
}

class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countryName: '',
      regionName: ''
    };
  }


  render() {

    console.log( 'coords: ', this.props );

    return (
      <div className="web">
        <AppHeader>
          <Header />

          label: { this.props.label}
          lattitude: {this.props.coords && this.props.coords.latitude}
        </AppHeader>

        <Container>
          <main className="main">
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                {/* <Redirect from="/" to="/" /> */}

              </Switch>
          </main>

          <AppAside fixed hidden>
          <Aside />
          </AppAside>
        </Container>
        
        <AppFooter>
          <Footer />
        </AppFooter>

      </div>
    );
  }
}

export default geolocated()(Layout);