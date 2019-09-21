import React,{ useState, useEffect, useContext }  from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';
import Context from '../contextStore/Context';
import config from '../config.json';
import { Button, Form, Container } from 'semantic-ui-react'
import axios from 'axios';
const Home=(props)=>{

  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
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
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

  const state = useContext(Context);
  const responseGoogle = (response) => {
  console.log(response);
}

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
      const body = JSON.stringify({ idToken: id_token });

      const res = await axios.post(
        'https://us-central1-techspardha-87928.cloudfunctions.net/api/login',
        body,
        config
      );
      console.log(body);
    } catch (error) {

    }
  };
  const onfailure = () => {
      console.log("failure");
    };

  return (
    <Container>
    <div className='home-container'>
    <div className='home'>
    <p className='title'>Sante</p>
    <p className='join'>Join us!</p>
    <GoogleLogin
    clientId={config.GIDKEY}
    buttonText="Login"
    onSuccess={onsuccess}
    onFailure={onfailure}
    cookiePolicy={'single_host_origin'}
  />
  </div>
    </div>
    </Container>
  );
}

export default Home;
