import React from 'react';
import { Link } from 'react-router-dom';

// export default () => (
//   <div>My Company Job Show</div>
// )

export default class MyCompanyJobShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchJobApplications } = this.props;
    fetchJobApplications(this.props.jobId);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.applications.map(application => <li key={application.id}><Link to={`/applications/${application.id}`}>{application.user.email}</Link></li>)}
        </ul>
      </div>
    );
  }
}
