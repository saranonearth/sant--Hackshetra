import React, { useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
const OnboardHospital = props => {
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    name: ''
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
        <h1>Hospital</h1>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Name:</label>
            <input
              name='name'
              onChange={handleChange}
              type='text'
              required='required'
            />
          </Form.Field>
          <Form.Field>
            <label>Contact Number:</label>
            <input
              name='phone'
              onChange={handleChange}
              type='text'
              maxLength='10'
              required='required'
            />
          </Form.Field>
          <Form.Field>
            <label>Address:</label>
            <input
              name='address'
              onChange={handleChange}
              type='text'
              required='required'
            />
          </Form.Field>
          <Button>Send</Button>
        </Form>
      </Container>
    </>
  );
};

export default OnboardHospital;
