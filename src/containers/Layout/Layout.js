import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; // Redirect,

// routes config
import routes from '../../routes';
import { Page404 } from '../../Views/Pages';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countryName: '',
      regionName: ''
    };
  }

  render() {
    return (
      <React.Fragment>
        
        <Header routes={routes} />
        
        <main className="main">

            <Switch>
              {routes.map((route, idx) => {
                  return route.component 
                    ? ( <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => ( <route.component {...props} /> )} /> )
                    : (null);
                },
              )}
              {/* <Redirect from="/" to="/" /> */}
              <Route component={Page404} />
            </Switch>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout; //geolocated()(Layout);