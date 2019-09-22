import React, { useState, useEffect } from 'react';
import TopPanel from './topPanel.jsx';
import { Container, Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

const PatientDetails = props => {
  const [istate, setState] = useState({
    list: []
  });
  const pId = props.match.params.id;
  console.log(pId);
  useEffect(() => {
    const getP = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/user/allpatients?id=${pId}`
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
    <>
      <TopPanel />
      <Container>
        <div className='user-card'>
          {istate.list.map(e => (
            <Card key={e._id} className='user-card'>
              <Image src={e.userImg} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{e.name}</Card.Header>
                <Card.Description>
                  <div className='details'>
                    <div>
                      <span className='strong'>Age: </span>
                      {e.age}
                    </div>
                    <div>
                      <span className='strong'>Sex: </span>
                      {e.sex == 1 ? 'Male' : 'Female'}
                    </div>
                    <div>
                      <span className='strong'>Hospital: </span>
                      {e.hospital}
                    </div>
                    <div>
                      <span className='strong'>Contact: </span>
                      {e.phone}
                    </div>
                    <div>
                      <span className='strong'>Address: </span>
                      {e.address}
                    </div>
                    <div>
                      <span className='strong'>Lung Cancer: </span>
                      {e.lungCancer ? 'Positive' : 'Negative'}
                    </div>
                    <div>
                      <span className='strong'>Heart Cancer: </span>
                      {e.heartCancer ? 'Positive' : 'Negative'}
                    </div>
                  </div>
                  <Button className='clg'>Add Prescription</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PatientDetails;
