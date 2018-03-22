import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Log in </h1>
      <div className="container">
        <div className="row">
          <div className="main">
            <h3>Please Log In</h3>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
