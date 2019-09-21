import React, { useContext, useState, useEffect } from 'react';
import Context from '../contextStore/Context';
import { Button, Container, Menu, Input, List } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import TopPanel from './topPanel.jsx';
const DoctorDash = props => {
  const [istate, setState] = useState({
    list: []
  });
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    const getP = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/user/doctor?doctor=${state.user.name}`
        );
        setState({
          ...istate,
          list: [...res.data]
        });
      } catch (error) {
        console.log(error);
      }
    };

    getP();
  }, []);
  console.log(istate);
  return (
    <div>
      <TopPanel />
      <h1 className='hospital-dashboard-title'>Doctor Dashboard</h1>
      <Menu className='hospital-dashboard-menu'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Menu position='right'></Menu.Menu>
      </Menu>
      <Container className='hospital-dash-container'>
        <List divided relaxed>
          <List.Item className='list-head-colored'>
            <List.Content className='list-head-content-colored'>
              <div className='list-heading'>
                <div className='list-heads-title'>Name</div>
                <div className='list-heads-title'>Age</div>
                <div className='list-heads-title'>Gender</div>
                <div className='list-heads-title'>Contact</div>
              </div>
            </List.Content>
          </List.Item>
          {istate.list.map(e => (
            <List.Item key={e._id}>
              <List.Content floated='right'>
                <Button>&times;</Button>
              </List.Content>
              <div className='list-heading'>
                <div className='list-heads'>{e.name}</div>
                <div className='list-heads'>{e.age}</div>
                <div className='list-heads'>
                  {' '}
                  {e.sex == 1 ? 'Male' : 'Female'}
                </div>
                <div className='list-heads'>{e.phone}</div>
              </div>
            </List.Item>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default DoctorDash;
