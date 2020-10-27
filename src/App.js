import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './util'
import Dashboard from './components/pages/Dashboard';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Track from './components/pages/Track';
import Ship from './components/pages/Ship';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/ship" component={Ship} />
        <Route exact path="/track" component={Track} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
