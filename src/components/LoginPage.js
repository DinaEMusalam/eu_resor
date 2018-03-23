import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    }
  }

  render() {
    const responseFacebook = (response) => {
      sessionStorage.setItem("userData", JSON.stringify(response));
      this.setState({ redirect: true });
    }

    const responseGoogle = (response) => {
      sessionStorage.setItem('userData', JSON.stringify(response));
      this.setState({ redirect: true });
    }

    if (this.state.redirect && sessionStorage.getItem('userData')) {
      return (<Redirect to={'/Home'} />)
    }

    return (
      <div>
        <h1>Log in </h1>
        <div className="container">
          <div className="row">
            <div className="main">
              <h3>Please Log In</h3>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <FacebookLogin
                    appId="435225806914662"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} />
                </div>
                <br /><br />
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <GoogleLogin
                    clientId="27092746582-v5003oq35s1sddg4dpbi0igvuhrupecb.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    autoLoad={false}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
