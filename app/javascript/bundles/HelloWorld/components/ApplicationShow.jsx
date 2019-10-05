import React from 'react';
import StageIndexItem from './StageIndexItem';

export default class ApplicationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchApplicationMovings } = this.props;
    fetchApplicationMovings(this.props.applicationId);
  }

  render() {
    // const StageName = ({text, stageId}) => (this.props.movings[stageId] ? <strong>{text}</strong> : <span>{text}<button onClick={this.move}>Move to here</button></span>);
    // const StageName = ({text, stageId}) => (<strong>{text}</strong>);
    const { applicationId } = this.props;
    return (
      <div>
        <ul>
          {this.props.stages.map(stage => <li key={stage.id}><StageIndexItem text={stage.name} applicationId={applicationId} stageId={stage.id} movings={this.props.movings} createMoving={this.props.createMoving} /></li>)}
        </ul>
      </div>
    );
  }
}
