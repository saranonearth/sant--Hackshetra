import React, { useState, useEffect, useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';
import Context from '../contextStore/Context';
import config from '../config.json';
import axios from 'axios';
const Home = props => {
  const state = useContext(Context);
  const responseGoogle = response => {
    console.log(response);
  };

  if (state.user && !state.user.onBoard) {
    props.history.push('/onboard');
  }

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
      console.log(res);
    } catch (error) {}
  };
  const onfailure = () => {
    console.log('failure');
  };
  return (
    <div className=''>
      <h1>Home</h1>
      <GoogleLogin
        clientId={config.GIDKEY}
        buttonText='Login'
        onSuccess={onsuccess}
        onFailure={onfailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Home;
