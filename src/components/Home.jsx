import React, { useState, useEffect, useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Context from '../contextStore/Context';
import config from '../config.json';
<<<<<<< HEAD
import { Button, Form, Container } from 'semantic-ui-react';
=======
import HomeImg from '../homeImg.png';
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
import axios from 'axios';

const Home = props => {
<<<<<<< HEAD
  const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];

  const numBalls = 50;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
  }

  // Keyframes
  balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    );
  });

  const state = useContext(Context);

=======
  const { state, dispatch } = useContext(Context);
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
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
<<<<<<< HEAD
      console.log(res);
    } catch (error) {
      console.log('auth error');
=======

      dispatch({
        type: 'LOGIN',
        payload: res.data
      });

      props.history.push('/onboard');
    } catch (error) {
      console.log(error);
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
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
