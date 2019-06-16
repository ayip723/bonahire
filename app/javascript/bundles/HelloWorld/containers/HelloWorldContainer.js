// Simple example of a React "smart" component

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import HelloWorld from '../components/HelloWorld';
import * as actions from '../actions/helloWorldActionCreators';
// import { fetchCompanies } from '../actions/helloWorldActionCreators';

// Which part of the Redux global state does our component want to receive as props?
// const mapStateToProps = (state) => ({ name: state.companies.name });
const mapStateToProps = (state) => {
  return {
    name: state.companies.name,
    companies: state.companies.companies,
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
// const mapDispatchToProps = dispatch => ({
//   fetchCompanies: () => dispatch(fetchCompanies())
// });
// console.log(actions);
export default connect(mapStateToProps, actions)(HelloWorld);
// export default connect(mapStateToProps, bindActionCreators(actions, dispatch))(HelloWorld);
// export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
