import { connect } from 'react-redux';
import MyCompany from '../components/MyCompany';
import { fetchMyCompany } from '../actions/helloWorldActionCreators';

const mapStateToProps = (state) => {
  const company = state.my_company.company || {};
  const jobs = state.my_company.jobs || {};
  return {
    company,
    jobs
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMyCompany: () => dispatch(fetchMyCompany())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCompany);
