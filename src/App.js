import React, { useContext, useReducer } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Onboard from './components/Onboard';
import OnboardDoctor from './components/OnboardDoctor';
import OnboardHospital from './components/OnboardHospital';
import Patient from './components/Patient';
import Context from './contextStore/Context';
<<<<<<< HEAD
import Patient from './components/Patient';
import HospitalDash from './components/HospitalDash.jsx';
=======
import HospitalDash from './components/HospitalDash.jsx';
import DoctorDash from './components/DoctorDash.jsx';
import PatientDetails from './components/PatientDetails.jsx';
import reducer from './reducers/rootReducer';
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
<<<<<<< HEAD
=======
  console.log(state);
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='App'>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={Home} />{' '}
            <Route path='/onboard/Hospital/Patient' component={Patient} />{' '}
            <Route path='/onboard/Doctor' component={OnboardDoctor} />{' '}
            <Route path='/onboard/Hospital' component={OnboardHospital} />{' '}
<<<<<<< HEAD
=======
            <Route path='/onboard/HospitalDash' component={HospitalDash} />{' '}
            <Route path='/onboard/DoctorDash' component={DoctorDash} />{' '}
            <Route path='/patientDetails' component={PatientDetails} />{' '}
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
            <Route path='/onboard' component={Onboard} />{' '}
          </Switch>{' '}
        </HashRouter>{' '}
      </div>
    </Context.Provider>
  );
}

export default App;
