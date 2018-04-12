/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      name: ''
    };
  }
  componentDidMount() {

    let data = JSON.parse(sessionStorage.getItem('userData'));
    let named = '';
    if (data.name) {
      named = data.name;
    } else {
      named = data.profileObj.name
    }
    if (sessionStorage.getItem('userData')) {
      this.setState({ name: named })
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    const logout = (response) => {
      console.log('logout response', response);
      sessionStorage.removeItem('userData');
      this.setState({ redirect: true });
    }

    if (!sessionStorage.getItem('userData')) {
      return (<Redirect to={'/'} />)
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand abs" href="#"> EU Resor</a>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fuel-saving">Demo-App</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/countries">Countries</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {this.state.name}
                <button onClick={logout}>loggga utttttt</button>
              </li>
            </ul>
          </div>        
        </div>
      </nav>
    );
  }
}


export default Header;
