import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../actions/sessionActionCreators';
import SessionForm from '../components/SessionForm';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
