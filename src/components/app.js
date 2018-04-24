/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./extra/Header";
import LoginPage from './extra/LoginPage';
import HomePage from './extra/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './about/AboutPage';
import Contact from './contact/contact';
import NotFoundPage from './extra/NotFoundPage';



// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {

  LoginContainer = () => (
    <div className="container">
      <Route path="/" component={LoginPage} />
    </div>
  )


  DefaultContainer = () => (
    <div>
      <div className="container">
        <Header />
        <br/>
        <Route path="/Home" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutPage} />
        {/* <Route component={NotFoundPage} /> */}
      </div>
    </div>
  )



  render() {
    return (
      <div className="routingDiv">
        <Switch>
          <Route exact path="/" component={this.LoginContainer} />
          <Route component={this.DefaultContainer} />
        </Switch>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
