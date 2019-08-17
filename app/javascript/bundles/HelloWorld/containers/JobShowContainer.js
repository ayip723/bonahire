import { connect } from 'react-redux';
import JobShow from '../components/JobShow';
import { createApplication, fetchJob } from '../actions/helloWorldActionCreators';
import { selectJob } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const jobId = parseInt(match.params.jobId);
  const companyId = parseInt(match.params.companyId);
  const job = selectJob(state.jobs, jobId);
  return {
    companyId,
    jobId,
    job
  }
};

const mapDispatchToProps = dispatch => ({
  fetchJob: id => dispatch(fetchJob(id)),
  createApplication: application => dispatch(createApplication(application))
});

// export default connect(mapStateToProps, {fetchJob})(JobShow);
export default connect(mapStateToProps, mapDispatchToProps)(JobShow);
