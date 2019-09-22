import React, { useContext } from 'react';
import config from '../config.json';
import { GoogleLogout } from 'react-google-login';
import Context from '../contextStore/Context';
import { withRouter } from 'react-router-dom';
const Logout = props => {
  const { dispatch } = useContext(Context);

  const logout = () => {
    console.log('logout');
    dispatch({
      type: 'LOGOUT'
    });
    props.history.push('/');
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

export default withRouter(Logout);
