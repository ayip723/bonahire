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
    return (
      <div>
        <ul>
          {this.props.stages.map(stage => <li key={stage.id}><StageIndexItem text={stage.name} stageId={stage.id} movings={this.props.movings}/></li>)}
        </ul>
      </div>
    );
  }
}
