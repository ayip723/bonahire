import { connect } from 'react-redux';

import ApplicationIndex from '../components/ApplicationIndex';
import { fetchMyApplications } from '../actions/helloWorldActionCreators';
import { asArray } from '../reducers/selectors';


const mapStateToProps = (state) => {
  return {
    my_applications: asArray(state.my_applications)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMyApplications: () => dispatch(fetchMyApplications())
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationIndex);
