import React, { useState, useEffect, useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Context from '../contextStore/Context';
import config from '../config.json';
import HomeImg from '../homeImg.png';
import axios from 'axios';

const Home = props => {
  const { state, dispatch } = useContext(Context);
  const onsuccess = async user => {
    try {
      const id_token = user.getAuthResponse().id_token;
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ token: id_token });

      const res = await axios.post('http://localhost:4000/auth', body, config);

      dispatch({
        type: 'LOGIN',
        payload: res.data
      });

      props.history.push('/onboard');
    } catch (error) {
      console.log(error);
    }
  };
  const onfailure = () => {
    console.log('failure');
  };

  return (
    <div className='home'>
      <div className='home-holder'>
        <div className='title'>
          <h1>Santé</h1>
        </div>
        <div>
          <p className='sub'>Making people healthy.</p>
          {state.isAuth ? (
            <button
              onClick={() => {
                props.history.push('/onboard');
              }}
              className='ui button clg'
            >
              Dashboard
            </button>
          ) : (
            <GoogleLogin
              clientId={config.GIDKEY}
              buttonText='Join Us.'
              onSuccess={onsuccess}
              onFailure={onfailure}
              cookiePolicy={'single_host_origin'}
            />
          )}
        </div>
      </div>
      <div className='home-img'>
        <img src={HomeImg} alt='' />
      </div>
    </div>
  );
};

export default Home;
