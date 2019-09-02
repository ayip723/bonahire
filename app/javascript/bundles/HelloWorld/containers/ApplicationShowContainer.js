import { connect } from 'react-redux';
import React from 'react';
import { fetchApplicationMovings } from '../actions/helloWorldActionCreators';
import ApplicationShow from '../components/ApplicationShow';

const mapStateToProps = (state, { match }) => {
  const jobId = parseInt(match.params.applicationId);
  return {
    jobId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApplicationMovings: (id) => dispatch(fetchApplicationMovings(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationShow);
