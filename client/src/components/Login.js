import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
  const Login = (props) => {
    const [user, setUser] = useState({username: '', password: ''})

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  const login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(error => console.log(error))
    }

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user)
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}>
        <input type='text' name='username' value={user.username} placeholder='Username' onChange={handleChange}/>
        <input type='password' name='password' value={user.password} placeholder='Password' onChange={handleChange}/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
