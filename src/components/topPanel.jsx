import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';

import Logout from '../components/Logout';
import { Menu } from 'semantic-ui-react';

import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
const TopPanel = props => {
  return (
    <>

      <Menu className='clg white lg'>
        <Menu.Item className='white'>Sante</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Logout />
          </Menu.Item>
        </Menu.Menu>
      </Menu>


      <Menu>
        <Menu.Item>Sante</Menu.Item>
      </Menu>

    <Menu>
      <Menu.Item>
        Sante
      </Menu.Item>
    <Menu.Menu position='right'>
    <Menu.Item icon='sign-out' name='Add Patient' onClick=''>
    </Menu.Item>
    </Menu.Menu>
    </Menu>

    </>
  );
};

export default TopPanel;
