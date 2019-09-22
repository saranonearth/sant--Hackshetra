import React, { useContext, useState } from 'react';
// import Context from '../contextStore/Context';
<<<<<<< HEAD
import { Menu } from 'semantic-ui-react';
=======

import { Menu } from 'semantic-ui-react'
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
const TopPanel = props => {
  return (
    <>
<<<<<<< HEAD
      <Menu>
        <Menu.Item>Sante</Menu.Item>
      </Menu>
=======
    <Menu>
      <Menu.Item>
        Sante
      </Menu.Item>
    <Menu.Menu position='right'>
    <Menu.Item icon='sign-out' name='Add Patient' onClick=''>
    </Menu.Item>
    </Menu.Menu>
    </Menu>
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
    </>
  );
};

export default TopPanel;
