import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './helpers/routes'

import './App.scss';

function App() {
  console.log()
  return (
    <div className="app d-flex justify-content-center">
        <Router>
          <Switch>
            {routes.map(route => <Route key={route.id} exact path={route.path} component={route.component} />)}
          </Switch>
        </Router>
    </div >
  )
}

export default App;



