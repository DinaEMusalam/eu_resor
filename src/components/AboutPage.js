import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';


class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirect: false,
      appName: "Login with Facebook and Google using ReactJS and RESTful APIs",
    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('userData'));
    this.setState({ name: data.userData.name })
  }

  render() {

    if (!sessionStorage.getItem('userData') || this.state.redirect) {
      return (<Redirect to={'/'} />)
    }

    return (
      <div >
        Welcome {this.state.name} , name={this.state.appName}
        <br />
        <h2 className="alt-header">About</h2>
        <p>
          This example app is part of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
        starter kit</a>.
      </p>
        <p>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
      </div>
    );
  }
}
export default AboutPage;
