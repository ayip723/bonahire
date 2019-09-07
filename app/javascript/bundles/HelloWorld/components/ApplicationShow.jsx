import React from 'react';

export default class ApplicationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchApplicationMovings } = this.props;
    fetchApplicationMovings(this.props.applicationId);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.stages.map(stage => <li key={stage.id}>{stage.name}</li>)}
        </ul>
      </div>
    );
  }
}
