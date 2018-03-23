import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
// import * as Login from '../actions/Login';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
    let Login;
    if (type === 'facebook' && res.email) {
      Login = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      };
    }

    if (type === 'google' && res.w3.U3) {
      Login = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (Login) {
      GoogleLogin('signup', Login).then((result) => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({ redirect: true });
      });
    } else {
      console.log('fail ');
    }
  }

  render() {

    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/about'} />)
    }

    // const responseFacebook = (response) => {
    //     this.signup(response, 'facebook');
    // }

    const responseGoogle = (response) => {
      this.signup(response, 'google');
    }

    return (

      <div className="row body">
        <div className="medium-12 columns">
          <div className="medium-12 columns">
            <h2 id="welcomeText"></h2>

            {/* <FacebookLogin
appId="Your FacebookAPP ID"
autoLoad={false}
fields="name,email,picture"
callback={responseFacebook}/>
<br/><br/> */}

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
