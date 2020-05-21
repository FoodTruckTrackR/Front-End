import React from 'react';

const LoginForm = () => {
    return (
        <form>
          <label>
              Username: 
              <input 
                type='text'
                name='username'
                id='username'
              />
        </label>
        <label>
            Password: 
            <input 
                type='password'
                name='password'
                id='password'
            />    
        </label>
        <button type='submit'>Login</button>  
        </form>
    )
}

export default LoginForm;