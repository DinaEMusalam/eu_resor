/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class Header extends React.Component {
  render() {
    const activeStyle = { color: 'black' };
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink className="navbar-brand" exact to="/" activeStyle={activeStyle}>Home</NavLink>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/fuel-savings" activeStyle={activeStyle}>Demo App<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>About</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
