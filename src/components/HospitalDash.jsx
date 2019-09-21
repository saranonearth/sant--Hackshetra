import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';
import { Button, Form, Container, Divider, Grid, Segment,Card,Image,Menu, Input,List } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';
import TopPanel from './topPanel.jsx';
const HospitalDash = props => {

  return (
    <>
    <TopPanel/>
    <h1 className='hospital-dashboard-title'>Hospital Dashboard</h1>
    <Menu>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
        <Menu.Menu position='right'>
      <Menu.Item name='Add Patient' onClick=''>
      </Menu.Item>
      </Menu.Menu>
    </Menu>
      <Container className='hospital-dash-container'>
      <List divided relaxed>
        <List.Item>
        <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
        <List.Icon name='stethoscope' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>Patient 1</List.Header>
        </List.Content>
        </List.Item>
        <List.Item>
        <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
        <List.Icon name='stethoscope' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>Patient 2</List.Header>
        </List.Content>
        </List.Item>
        <List.Item>
        <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
        <List.Icon name='stethoscope' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>Patient 3</List.Header>
        </List.Content>
        </List.Item>
        </List>
      </Container>
    </>
  );
};

export default HospitalDash;
