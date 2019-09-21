import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';

import { Button, Form, Container, Divider, Grid, Segment,Card,Image } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';
import TopPanel from './topPanel.jsx';
const HospitalDash = props => {

  return (
    <>
    <TopPanel/>
    <h1 className='hospital-dashboard-title'>Hopital Dashboard</h1>
      <Container className='hospital-dash-container'>
            <Grid columns={1} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      </Container>
    </>
  );
};

export default HospitalDash;
