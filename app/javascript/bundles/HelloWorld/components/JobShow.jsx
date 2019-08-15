import React from 'react';

export default class JobShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchJob } = this.props;
    fetchJob(this.props.jobId);
  }

  render() {
    return (
      <div>Job Show</div>
    );
  }
}
