import React from 'react';

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
          {this.props.applications.map(application => <li key={application.id}>{application.comment}</li>)}
        </ul>
      </div>
    );
  }
}
