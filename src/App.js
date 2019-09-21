import React, { useContext, useReducer } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Onboard from './components/Onboard';
import OnboardDoctor from './components/OnboardDoctor';
import OnboardHospital from './components/OnboardHospital';
import Patient from './components/Patient';
import Context from './contextStore/Context';
import HospitalDash from './components/HospitalDash.jsx';
import DoctorDash from './components/DoctorDash.jsx';
import PatientDetails from './components/PatientDetails.jsx';
import reducer from './reducers/rootReducer';
import Error404 from './components/Error404';
function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='App'>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={Home} />{' '}
            <Route path='/onboard/Hospital/Patient' component={Patient} />{' '}
            <Route path='/onboard/Doctor' component={OnboardDoctor} />{' '}
            <Route path='/onboard/Hospital' component={OnboardHospital} />{' '}
            <Route path='/onboard/HospitalDash' component={HospitalDash} />{' '}
            <Route path='/onboard/DoctorDash' component={DoctorDash} />{' '}
            <Route path='/patientDetails' component={PatientDetails} />{' '}
            <Route path='/onboard' component={Onboard} />{' '}
            <Route component={Error404} />
          </Switch>{' '}
        </HashRouter>{' '}
      </div>
    </Context.Provider>
  );
}

export default App;
