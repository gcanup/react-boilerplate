import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './helpers/routes'
import { Context } from "./helpers/context";
import './App.scss';

const App = () => {
  const [context, setContext] = useState("first");

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="app d-flex justify-content-center">
        <Router>
          <Switch>
            {routes.map(route =>
              <Route
                key={route.id}
                exact
                path={route.path}
                component={route.component} />)}
          </Switch>
        </Router>
      </div >
    </Context.Provider>
  )
}

export default App;



