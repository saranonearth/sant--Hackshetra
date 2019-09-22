import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';
<<<<<<< HEAD
import {
  Button,
  Form,
  Container,
  Divider,
  Grid,
  Segment,
  Card,
  Image
} from 'semantic-ui-react';
=======
import { Button, Form, Container, Divider, Grid, Segment,Card,Image,Menu, Input,List } from 'semantic-ui-react'
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import TopPanel from './topPanel.jsx';
const HospitalDash = props => {
  return (
<<<<<<< HEAD
    <>
      <TopPanel />
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
=======
    <div>
    <TopPanel/>
    <h1 className='hospital-dashboard-title'>Hospital Dashboard</h1>
    <Menu  className='hospital-dashboard-menu'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
        <Menu.Menu position='right'>
      <Menu.Item icon='add' name='Add Patient' className='add-patient' onClick=''>
      </Menu.Item>
      </Menu.Menu>
    </Menu>
      <Container className='hospital-dash-container'>
      <List divided relaxed>
      <List.Item className="list-head-colored">
      <List.Content className="list-head-content-colored">
      <div className='list-heading'>
        <div className='list-heads-title'>Name</div>
        <div className='list-heads-title'>Age</div>
        <div className='list-heads-title'>Gender</div>
        <div className='list-heads-title'>Contact</div>
      </div>
      </List.Content>
      </List.Item>
        <List.Item>
        <List.Content floated='right'>
        <Button>&times;</Button>
      </List.Content>
      <div className='list-heading'>
        <div className='list-heads'>Name</div>
        <div className='list-heads'>Age</div>
        <div className='list-heads'>Gender</div>
        <div className='list-heads'>Contact</div>
      </div>
        </List.Item>

        </List>
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
      </Container>
    </div>
  );
};

export default HospitalDash;
