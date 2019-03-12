import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Survey from '../components/survey/survey';
import Header from '../components/header/header';

const Root = () => {
  return (
    <Fragment>
      <Router>
        <div className="Appcontainer">
          <Header />
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/home" component={App} exact />
            <Route path="/survey" component={Survey} exact />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default Root;

