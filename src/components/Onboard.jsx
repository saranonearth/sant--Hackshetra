import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';

import {
  Button,
  Form,
  Container,
  Divider,
  Grid,
  Segment
} from 'semantic-ui-react';

import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
const Onboard = props => {
  return (
    <>
      <Container className='onboard'>
        <Link to={`/onboard/Doctor`}>
          <div className='card'>Doctor</div>
        </Link>
        <Link to={`/onboard/Hospital`}>
          <div className='card'>Hospital</div>
        </Link>
      </Container>
    </>
  );
};

export default Onboard;
