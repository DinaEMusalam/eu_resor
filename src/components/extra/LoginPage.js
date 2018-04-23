import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Col } from 'react-bootstrap';



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

      <div className="Login">
        <h1 className="mt-5 mb-3 text-muted text-center">Login </h1>
        <h3 className="mt-5 mb-3 text-muted text-center">Please Log In</h3>

        <div className="mt-5 mb-3 text-muted text-center">
              <FacebookLogin
                appId="435225806914662"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="btnFacebook"
                icon={<i className="fa fa-facebook" style={{ marginLeft: '5px' }}>
                </i>}
                textButton="&nbsp;&nbsp;Login with Facebook"
              />
              <GoogleLogin
                clientId="27092746582-v5003oq35s1sddg4dpbi0igvuhrupecb.apps.googleusercontent.com"
                buttonText="Login with Google"
                autoLoad={false}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="btnGoogle"
              >
                <i className="fa fa-google-plus" style={{ marginLeft: '5px' }} />
                <span>&nbsp;&nbsp;Login with Google</span>
              </GoogleLogin>
        </div>
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2018-2019</p>
      </div >
    );
  }
}

export default LoginPage;
