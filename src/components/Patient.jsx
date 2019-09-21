import React, { useContext, useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import TopPanel from './topPanel';
import axios from 'axios';
import Back from './Back';
import Context from '../contextStore/Context';
// import axios from 'axios';
// import { Redirect , Link } from 'react-router-dom';
const Patient = props => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
    hospital: '',
    phone: '',
    address: ''
  });
  const { state, dispatch } = useContext(Context);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(...formData);

      const res = await axios.post(
        'http://localhost:4000/user/patient',
        body,
        config
      );
      console.log(res);
      // setFormData({
      //   ...formData,
      //   name: '',
      //   contact: '',
      //   age: '',
      //   sex: '',
      //   cp: '',
      //   trestbps: '',
      //   chol: '',
      //   fbs: '',
      //   restecg: '',
      //   thalach: '',
      //   exang: '',
      //   oldpeak: '',
      //   slope: '',
      //   ca: '',
      //   thal: '',
      //   hospital: '',
      //   phone: '',
      //   address: ''
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopPanel />

      <Container>
        <Back props={props} />
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
            <label>Hospital :</label>
            <div className='form-item'>
              <input
                name='hospital'
                onChange={handleChange}
                type='text'
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Address :</label>
            <div className='form-item'>
              <input
                name='address'
                type='text'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Sex :</label>
            <div className='form-item'>
              <input
                name='sex'
                type='text'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Contact :</label>
            <div className='form-item'>
              <input
                name='contact'
                type='number'
                onChange={handleChange}
                required='required'
                maxLength='10'
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
              <select name='doctor' onChange={handleChange}>
                <option value=''></option>
              </select>
            </div>
          </Form.Field>
          <Form.Field>
            <label>Cp :</label>
            <div className='form-item'>
              <input
                name='cp'
                type='number'
                step='0.0001'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Trestbps :</label>
            <div className='form-item'>
              <input
                name='trestbps'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Chol :</label>
            <div className='form-item'>
              <input
                name='chol'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Fbs :</label>
            <div className='form-item'>
              <input
                name='fbs'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Restecg :</label>
            <div className='form-item'>
              <input
                name='restecg'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Thalach :</label>
            <div className='form-item'>
              <input
                name='thalach'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Exang :</label>
            <div className='form-item'>
              <input
                name='exang'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Oldpeak :</label>
            <div className='form-item'>
              <input
                name='oldpeak'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Slope :</label>
            <div className='form-item'>
              <input
                name='slope'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Ca :</label>
            <div className='form-item'>
              <input
                name='ca'
                type='number'
                step='0.0001'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Thal :</label>
            <div className='form-item'>
              <input
                name='thal'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>

          <Button className='clg'>Send</Button>
        </Form>
      </Container>
    </>
  );
};

export default Patient;
