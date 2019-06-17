import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { name: this.props.name };
  }

  componentDidMount() {
    const { fetchCompany } = this.props;
    fetchCompany(this.props.companyId);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <div>Company Show</div>
        <ul>
          {this.props.company.jobs.map(job => (<li key={job.id}>{job.position}</li>))}
        </ul>
      </div>
    );
  }
}
