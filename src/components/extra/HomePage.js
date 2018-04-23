import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as countriesActions from '../../actions/countryActions';
import CountriesList from '../country/CountriesList.js';
import { withRouter } from "react-router-dom";

import { bindActionCreators } from 'redux';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirect: false
    };
  }

  render() {
    console.log('Props', this.props);
    console.log('State', this.state.countries);
    if (this.props.countries != undefined) {

      return (
        <div className="body">
          <CountriesList countries={this.props.countries} />
        </div>
      );
    } else {
      return (
        <div>
          ..loading
        </div>
      )
    }
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  countries: PropTypes.object.isRequired

};

const mapStateToProps = (state, ownProps) => {
  console.log('State1', state);
  return {
    countries: state.countriesReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(countriesActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
