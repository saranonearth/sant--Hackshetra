import React from 'react';

import TopPanel from './topPanel.jsx';
import { Container, Card, Image } from 'semantic-ui-react';

import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
const PatientDetails = props => {
  return (
    <>
      <TopPanel />
      <Container>
        <div className='user-card'>
          <Card className='user-card'>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>User</Card.Header>
              <Card.Description>
                <div className='details'>
                  <div className='details-value'>Age:</div>
                  <div className='details-value'>Value</div>
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default PatientDetails;
