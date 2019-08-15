import { connect } from 'react-redux';
import JobShow from '../components/JobShow';
import { fetchJob } from '../actions/helloWorldActionCreators';
import { selectJob } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const jobId = parseInt(match.params.jobId);
  const companyId = parseInt(match.params.companyId);
  // const job = selectJob(state.companies, companyId, jobId);
  return {
    companyId,
    jobId,
    // job
  }
};

export default connect(mapStateToProps, {fetchJob})(JobShow);
