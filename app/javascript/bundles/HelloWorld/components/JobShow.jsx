import React from 'react';

export default class JobShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchJob } = this.props;
    fetchJob(this.props.jobId);
  }

  handleApply(e) {
    console.log('clicked.....');
  }

  render() {
    return (
      <div>
        <div>Job Show</div>
        <div>{this.props.job.position}</div>
        <div>{this.props.job.description}</div>
        <button onClick={this.handleApply}>Apply</button>
      </div>
    );
  }
}
