import React, { useContext, useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import TopPanel from './topPanel';
import axios from 'axios';
import Context from '../contextStore/Context';
import { Redirect } from 'react-router-dom';
const OnboardDoctor = props => {
  const { state } = useContext(Context);

  const [formData, setFormData] = useState({
    specialization: '',


    phone: '',

    address: ''


  });
  if (state.isAuth == false) return <Redirect to={'/'} />;
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      console.log(state.user._id);
      const body = JSON.stringify({ ...formData, user: state.user._id });
      const res = await axios.post(
        'http://localhost:4000/user/doctor',
        body,
        config
      );
      if (state.user.userType === 'doctors') {
        props.history.push('/onboard/DoctorDash');
      }
      if (state.user.userType === 'hospitals') {
        props.history.push('/onboard/HospitalDash');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopPanel />
      <Container>
        <h1>Doctor</h1>
        <br />
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label htmlFor='phone'>Contact Number :</label>
            <div className='form-item'>
              <input
                name='phone'
                onChange={handleChange}
                type='text'
                maxLength='10'
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label htmlFor='phone'>Address :</label>
            <div className='form-item'>
              <input
                name='address'
                onChange={handleChange}
                type='text'
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label htmlFor='specialization'>Specialization</label>
            <div className='form-item'>
              <select
                name='specialization'
                onChange={handleChange}
                required='required'
              >
                <option value='Disease1'>Disease 1</option>
                <option value='Disease2'>Disease 2</option>
                <option value='Disease3'>Disease 3</option>
                <option value='Disease4'>Disease 4</option>
              </select>
            </div>
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

export default OnboardDoctor;
