import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';
import { Button, Form, Container, Divider, Grid, Segment,Card,Image,Menu, Input,List } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';
import TopPanel from './topPanel.jsx';
const HospitalDash = props => {

  return (
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
      </Container>
    </div>
  );
};

export default HospitalDash;
