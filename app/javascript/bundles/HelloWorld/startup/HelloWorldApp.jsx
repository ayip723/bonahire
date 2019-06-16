import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import configureStore from '../store/helloWorldStore';
import HelloWorldContainer from '../containers/HelloWorldContainer';
import CompanyShowContainer from '../containers/CompanyShowContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const HelloWorldApp = (props) => (
  <Provider store={configureStore(props)}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HelloWorldContainer} />
        <Route exact path="/companies" component={HelloWorldContainer} />
        <Route exact path="/companies/:companyId" component={CompanyShowContainer} />
        <Route component={HelloWorldContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default HelloWorldApp;
