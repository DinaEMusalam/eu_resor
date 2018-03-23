import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loginError: false,
      redirect: false
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('userData'));
    this.setState({ name: data.profileObj.name || data.name })
}

  render() {
    const responseGoogle = (response) => {
      console.log('response', response);
      sessionStorage.setItem('userData', JSON.stringify(response));
      this.setState({ redirect: true });
    }

    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/'} />)
    }

    return (

      <div className="row body">
        <div className="medium-12 columns">
          <div className="medium-12 columns">
            <h2 id="welcomeText"></h2>
            Welcome {this.state.name} 

            <GoogleLogin
              clientId="27092746582-v5003oq35s1sddg4dpbi0igvuhrupecb.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle} />

          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
