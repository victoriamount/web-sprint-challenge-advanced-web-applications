import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialFormValues = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialFormValues)

  const history = useHistory()

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', formValues)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/bubble-page')
      })
      .catch(err => {
        console.log(err)
      })
  }
 

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <h1>Welcome to the Bubble App!</h1>
        <label>Username</label>
        <input 
        type='text'
        name='username'
        value={formValues.username}
        onChange={handleChange}
        placeholder='Username'
        />
        <label>Password</label>
        <input 
        type='text'
        name='password'
        value={formValues.password}
        onChange={handleChange}
        placeholder='Password'
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
