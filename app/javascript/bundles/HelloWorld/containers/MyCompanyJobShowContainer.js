import { connect } from 'react-redux';
import MyCompanyJobShow from '../components/MyCompanyJobShow';
import { fetchJobApplications } from '../actions/helloWorldActionCreators';
import { selectJob, selectApplications } from '../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  const jobId = parseInt(match.params.jobId);
  const job = selectJob(state.my_company.jobs, jobId);
  const applications = selectApplications(state.my_company.applications, job);
  return {
    jobId,
    job,
    applications
  };
};

const mapDispatchToProps = dispatch => ({
  fetchJobApplications: (id) => dispatch(fetchJobApplications(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCompanyJobShow);
