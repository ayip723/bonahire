import React from 'react';
import { Link } from 'react-router-dom';

export default class MyCompany extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchMyCompany } = this.props;
    fetchMyCompany();
  }

  render() {
    return (
      <div>
        <div>
          { this.props.company.name }
        </div>
        <div>
          <ul>
            {this.props.jobs.map(job => (<li key={job.id}><Link to={'/my_company/jobs/' + job.id}>{job.position}</Link></li>))}
          </ul>
        </div>
      </div>
    );
  }
}
