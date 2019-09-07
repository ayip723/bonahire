import { connect } from 'react-redux';
import React from 'react';
import { fetchApplicationMovings } from '../actions/helloWorldActionCreators';
import ApplicationShow from '../components/ApplicationShow';
import { selectApplication, asArray, sortBy } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const applicationId = parseInt(match.params.applicationId);
  const application = selectApplication(state.my_company.applications, applicationId);
  const stages = sortBy(asArray(application.stages), 'order');
  return {
    applicationId,
    application,
    stages
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApplicationMovings: (id) => dispatch(fetchApplicationMovings(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationShow);
