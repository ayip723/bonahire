import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import CompanyShow from '../components/CompanyShow';
import { fetchCompany } from '../actions/helloWorldActionCreators';
import { selectCompany, selectJobsForCompany } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const companyId = parseInt(match.params.companyId);
  const company = selectCompany(state.companies, companyId);
  // console.log('company:', company);
  const jobs = selectJobsForCompany(state, company);
  console.log('jobs:', jobs);
  return {
    companyId,
    // company: state.companies.companies[companyId],
    company,
    jobs,
    // jobs: []
  };
};

export default connect(mapStateToProps, {fetchCompany})(CompanyShow);
