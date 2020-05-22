import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';

const FormStyle = styled.form`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-top: 25%;
    width: 50%;
    margin-left: 25%;
    background-color: darkorange;
    color: aliceblue;
`

const LoginOperator = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        userType: 'operator'
    })

    const userChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const userSubmit = event => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        setUser({
            username: '',
            password: ''
        })
    }

    return (
        <FormStyle className="form-styling" onSubmit={userSubmit}>
          <label>
              Username: 
              <input 
                type='text'
                name='username'
                id='username'
                value={user.username}
                onChange={userChange}
              />
        </label>
        <label>
            Password: 
            <input 
                type='password'
                name='password'
                id='password'
                value={user.password}
                onChange={userChange}
            />    
        </label>
        <button type='submit'>Login</button>  
        </FormStyle>
    )
}

export default LoginOperator;