import React from 'react';

export default class StageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  move() {
    // Send the request to backend to move to this stage.
    // How to get the current stage? Use stageId.
    console.log('Moving to this stage......');
  }

  render() {
    return this.props.movings[this.props.stageId] ? <strong>{this.props.text}</strong> : <span>{this.props.text}<button onClick={this.move}>Move to here</button></span>;
  }
}
