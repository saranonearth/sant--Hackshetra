import React, { useContext, useReducer } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Onboard from './components/Onboard';
import OnboardDoctor from './components/OnboardDoctor';
import OnboardHospital from './components/OnboardHospital';
import Patient from './components/Patient';
import Context from './contextStore/Context';
import Patient from './components/Patient';
import HospitalDash from './components/HospitalDash.jsx';

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
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
    </Context.Provider>
  );
}

export default App;
