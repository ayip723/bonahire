import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import CompanyShow from '../components/CompanyShow';
import { fetchCompany } from '../actions/helloWorldActionCreators';
import { selectCompany } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const companyId = parseInt(match.params.companyId);
  const company = selectCompany(state.companies, companyId);
  return {
    companyId,
    // company: state.companies.companies[companyId],
    company
  };
};

export default connect(mapStateToProps, {fetchCompany})(CompanyShow);
