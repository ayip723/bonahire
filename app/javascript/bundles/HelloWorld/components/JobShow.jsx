import React from 'react';

export default class JobShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchJob } = this.props;
    fetchJob(this.props.jobId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const jobId = parseInt(this.props.match.params.jobId);
    const application = Object.assign({}, this.state, { job_id: jobId });
    this.props.createApplication(application);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <div>Job Show</div>
        <div>{this.props.job.position}</div>
        <div>{this.props.job.description}</div>
        <form onSubmit={this.handleSubmit}>
          <label>Comment</label>
          <br/>
          <textarea
            value={this.state.comment}
            onChange={this.update('comment')}
          />
          <br/>
          <button>Apply</button>
        </form>
      </div>
    );
  }
}
