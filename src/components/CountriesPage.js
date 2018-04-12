import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as countriesActions from '../actions/countryActions';
import CountriesList from './CountriesList';
import { bindActionCreators } from 'redux';


class CountriesPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="col-md-12">
                <h1>Countries</h1>
                <div className="col-md-4">
                    <CountriesList countries={this.props.countries} />
                </div>
            </div>
        );
    }
}

CountriesPage.propTypes = {
   // countries: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};

const mapStateToProps = (state, ownProps) => {
    return {
        countries: state.countries
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(countriesActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);