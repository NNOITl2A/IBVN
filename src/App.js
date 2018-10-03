import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/respontsive.css';
// import './assets/js/main.js';

// Containers
import { Layout } from './containers';

// Pages
import { Login, Page404, Page500, Register } from './Views/Pages';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
