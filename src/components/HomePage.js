import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirect: false
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

  render() {

    const logout = (response) => {
      console.log('logout response', response);
      sessionStorage.removeItem('userData');
      this.setState({ redirect: true });
    }

    if (this.state.redirect || !sessionStorage.getItem('userData')) {
      return (<Redirect to={'/'} />)
    }

    return (

      <div className="row">
        <div className="medium-12 columns">
          <div className="medium-12 columns">
            <h2 id="welcomeText"></h2>
            Welcome {this.state.name}
            <button onClick={logout}>loggga utttttt</button>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
