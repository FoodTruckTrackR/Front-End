import React from 'react';
import LoginForm from './Login_Diner';
import { Link, Route } from 'react-router-dom';

const LoginForm = () => {
    return(
        <div>
            <h1>Are you a diner or a truck operator?</h1>
            <Link to='/dinerlogin'>Diner</Link>
            <Link to='/operatorlogin'>Truck operator</Link>
        </div>
    )
}

export default LoginForm;