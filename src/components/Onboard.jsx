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
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              <Link onClick={handleDoctor} to={`/onboard/Doctor`}>
                Doctor
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link onClick={handleHospital} to={`/onboard/Hospital`}>
                Hospital
              </Link>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </>
  );
};

export default Onboard;
