import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import configureStore from '../store/helloWorldStore';
import GreetingContainer from '../containers/GreetingContainer';
import HelloWorldContainer from '../containers/HelloWorldContainer';
import CompanyShowContainer from '../containers/CompanyShowContainer';
import LoginFormContainer from '../containers/LoginFormContainer';
import SignupFormContainer from '../containers/SignupFormContainer';
import JobShowContainer from '../containers/JobShowContainer';
import ApplicationIndexContainer from '../containers/ApplicationIndexContainer';
import MyCompanyContainer from '../containers/MyCompanyContainer';
import MyCompanyJobShowContainer from '../containers/MyCompanyJobShowContainer';
import ApplicationShowContainer from '../containers/ApplicationShowContainer';
import { AuthRoute } from '../util/routeUtil';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const HelloWorldApp = (props) => (
  <Provider store={configureStore(props)}>
    <HashRouter>
      <header>
        <h1>BonaHire</h1>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={HelloWorldContainer} />
        <Route exact path="/companies" component={HelloWorldContainer} />
        <Route exact path="/companies/:companyId" component={CompanyShowContainer} />
        <Route exact path="/companies/:companyId/jobs/:jobId" component={JobShowContainer} />
        <Route exact path="/my_applications" component={ApplicationIndexContainer} />
        <Route exact path="/my_company" component={MyCompanyContainer} />
        <Route exact path="/my_company/jobs/:jobId" component={MyCompanyJobShowContainer} />
        <Route exact path="/applications/:applicationId" component={ApplicationShowContainer} />
        <Route component={HelloWorldContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default HelloWorldApp;
