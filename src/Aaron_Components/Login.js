import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
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
        <form onSubmit={userSubmit}>
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
        </form>
    )
}

export default LoginForm;