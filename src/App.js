import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />{' '}
        </Switch>{' '}
      </HashRouter>{' '}
    </div>
  );
}

export default App;
