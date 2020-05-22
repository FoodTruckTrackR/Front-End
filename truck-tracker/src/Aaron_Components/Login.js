import React from 'react';
import LoginDiner from './Login_Diner';
import LoginOperator from './Login_Operator'
import { Link, Route } from 'react-router-dom';

const LoginForm = () => {
    return(
        <div>
            <h1>Are you a diner or a truck operator?</h1>
            <Link to='/dinerlogin'>Diner</Link>
            <Link to='/operatorlogin'>Truck operator</Link>
            <Route path='/dinerlogin' component={LoginDiner} />
            <Route path='/operatorlogin' component={LoginOperator} />
        </div>
    )
}

export default LoginForm;