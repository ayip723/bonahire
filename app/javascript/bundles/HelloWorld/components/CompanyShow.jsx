import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { name: this.props.name };
  }

  componentDidMount() {
    // // console.log(this.props);
    // const { fetchCompanies } = this.props;
    // // console.log(fetchCompanies);
    // fetchCompanies();
  }

  render() {
    return (
      <div>Company Show</div>
    );
  }
}
