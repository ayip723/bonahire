import React from 'react';

export default class ApplicationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchMyApplications } = this.props;
    fetchMyApplications();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.my_applications.map(application => (<li key={application.id}>{ application.job.position }/{application.job.company.name}</li>))}
        </ul>
      </div>
    );
  }
}
