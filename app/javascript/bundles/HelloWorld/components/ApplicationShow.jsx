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
    const StageName = ({text, stageId}) => (this.props.movings[stageId] ? <strong>{text}</strong> : <span>{text}</span>);
    // const StageName = ({text, stageId}) => (<strong>{text}</strong>);
    return (
      <div>
        <ul>
          {this.props.stages.map(stage => <li key={stage.id}><StageName text={stage.name} stageId={stage.id} /></li>)}
        </ul>
      </div>
    );
  }
}
