import React from 'react';

export default class ApplicationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchApplicationMovings } = this.props;
    fetchApplicationMovings(this.props.jobId);
  }

  render() {
    return (<div>Application Show</div>);
  }
}
