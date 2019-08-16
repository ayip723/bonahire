import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  componentDidMount() {
    // console.log(this.props);
    const { fetchCompanies } = this.props;
    // console.log(fetchCompanies);
    fetchCompanies();
  }

  updateName = (name) => {
    // this.setState({ name });
    this.props.updateName(name);
    // console.log(this.props.companies);
  };

  render() {
    // console.log('companies:', this.props.companies);
    return (
      <div>
        <h3>
          // Hello, {this.state.name}!
          Hello, {this.props.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            // value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        <div>
          <ul>
            {this.props.companies.map(company => (<li key={company.id}><Link to={'/companies/' + company.id}>{company.name}</Link></li>))}
          </ul>
        </div>
      </div>
    );
  }
}
