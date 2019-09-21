import React, { useContext, useState } from 'react';
import Context from '../contextStore/Context';
import axios from 'axios';
import Doctor from '../doctor.png';
import Hospital from '../hospital.png';
import { Redirect, Link } from 'react-router-dom';
import {
  Card,
  Icon,
  Image,
  Container,
  Menu,
  Input,
  Button
} from 'semantic-ui-react';
import TopPanel from './topPanel';
const Onboard = props => {
  const { state, dispatch } = useContext(Context);
  console.log('onboard', state.userType);

  if (state.isAuth == false) return <Redirect to={'/'} />;
  if (state.user.userType === 'doctors')
    return <Redirect to='/onboard/doctordash' />;

  if (state.user.userType === 'hospitals')
    return <Redirect to='/onboard/HospitalDash' />;

  const setDoctor = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      console.log(state.user._id);
      const body = JSON.stringify({ id: state.user._id });
      const res = await axios.patch(
        'http://localhost:4000/user?type=doctors',
        body,
        config
      );
      dispatch({
        type: 'UTYPE',
        payload: res.data.user
      });
      if (state.user.userType === 'doctors') {
        props.history.push('/onboard/DoctorDash');
      }
      if (state.user.userType === 'hospitals') {
        props.history.push('/onboard/HospitalDash');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setHospital = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      console.log(state.user._id);
      const body = JSON.stringify({ id: state.user._id });
      const res = await axios.patch(
        'http://localhost:4000/user?type=hospitals',
        body,
        config
      );
      dispatch({
        type: 'UTYPE',
        payload: res.data.user
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopPanel />
      <div className='onboard'>
        <div>
          <Card>
            <Image className='nobg sm' src={Hospital} wrapped ui={false} />
            <Card.Content>
              <Card.Description className='center'>
                <button onClick={setHospital} class='ui clg button'>
                  Hospital
                </button>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div>
          <Card>
            <Image className='nobg' src={Doctor} wrapped ui={false} />
            <Card.Content>
              <Card.Description className='center'>
                <button onClick={setDoctor} class='ui clg button'>
                  Doctor
                </button>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Onboard;
