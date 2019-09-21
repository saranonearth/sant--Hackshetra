import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Onboard from './components/Onboard';
import OnboardDoctor from './components/OnboardDoctor';
import OnboardHospital from './components/OnboardHospital';
import Patient from './components/Patient'

function App() {
  return (
    <div className='App'>
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />{' '}
          <Route path='/onboard/Hospital/Patient' component={Patient} />{' '}
          <Route path='/onboard/Doctor' component={OnboardDoctor} />{' '}
          <Route path='/onboard/Hospital' component={OnboardHospital} />{' '}
          <Route path='/onboard' component={Onboard} />{' '}

        </Switch>{' '}
      </HashRouter>{' '}
    </div>
  );
}

export default App;
