import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/home" component={App} exact />
        <Route path="/survey" component={App} exact />
      </Switch>
    </Router>
  );
};

export default Root;

