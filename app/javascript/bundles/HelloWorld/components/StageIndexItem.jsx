import React from 'react';

export default class StageIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
    this.move = this.move.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  move() {
    // Send the request to backend to move to this stage.
    // How to get the current stage? Use stageId.
    const { stageId, applicationId } = this.props;
    const moving = Object.assign({}, this.state, {stage_id: stageId, application_id: applicationId});
    // Still need to add the comment.
    console.log('----------------------------------');
    console.log(moving);
    // this.props.createMoving(moving);
  }

  render() {
    return this.props.movings[this.props.stageId] ? <strong>{this.props.text}</strong> : <span>{this.props.text}<button onClick={this.move}>Move to here</button><input type="text" onChange={this.update('comment')}/></span>;
  }
}
