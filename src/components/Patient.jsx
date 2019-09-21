import React, { useContext, useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
// import Context from '../contextStore/Context';
// import axios from 'axios';
// import { Redirect , Link } from 'react-router-dom';
const Patient = props => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    doctor: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <Container>
        <h1>Patient Details:</h1>
        <br />
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Name :</label>
            <div className='form-item'>
              <input
                name='name'
                onChange={handleChange}
                type='text'
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Age :</label>
            <div className='form-item'>
              <input
                name='age'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Doctor :</label>
            <div className='form-item'>
              <select name='doctor' onChange={handleChange} required='required'>
                <option value=''></option>
              </select>
            </div>
          </Form.Field>
          <Button>Send</Button>
        </Form>
      </Container>
    </>
  );
};

export default Patient;
