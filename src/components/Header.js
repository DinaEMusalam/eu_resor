/* eslint-disable import/no-named-as-default */
import React from 'react';
import {  NavLink} from 'react-router-dom';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class Header extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
      </div>
    );
  }
}


export default Header;
