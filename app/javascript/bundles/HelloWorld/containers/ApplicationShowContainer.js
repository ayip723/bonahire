import { connect } from 'react-redux';
import React from 'react';
import { fetchApplicationMovings, createMoving } from '../actions/helloWorldActionCreators';
import ApplicationShow from '../components/ApplicationShow';
import { selectApplication, asArray, sortBy } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const applicationId = parseInt(match.params.applicationId);
  const application = selectApplication(state.my_company.applications, applicationId);
  const stages = sortBy(asArray(application.stages), 'order');
  const movings = application.movings;
  return {
    applicationId,
    application,
    stages,
    movings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApplicationMovings: (id) => dispatch(fetchApplicationMovings(id)),
  createMoving: moving => dispatch(createMoving(moving))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationShow);
