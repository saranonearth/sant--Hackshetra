import React, { useContext } from 'react';
import config from '../config.json';
import { GoogleLogout } from 'react-google-login';
import Context from '../contextStore/Context';
// import { Redirect } from 'react-router-dom';

const Logout = () => {
  const { state, dispatch } = useContext(Context);

  const logout = () => {
    console.log('logout');
    dispatch({
      type: 'LOGOUT'
    });
  };
  return (
    <div>
      <GoogleLogout
        clientId={config.GIDKEY}
        buttonText='Logout'
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
