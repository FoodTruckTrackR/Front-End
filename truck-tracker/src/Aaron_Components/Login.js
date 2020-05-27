import React from 'react';
import LoginDiner from './Login_Diner';
import LoginOperator from './Login_Operator'
import { Link, Route } from 'react-router-dom';
import Register from './Register';
import styled from 'styled-components';
import '../App.css'

const LoginDiv = styled.div`
    margin-left: 25%;
    display: flex;
    flex-direction: column;
`

const LinkDiv = styled.div`
    margin-left: 25%;
`

const LoginForm = () => {
    return(
        <div>
            <LoginDiv>
            <h1>Are you a diner or a truck operator?</h1>
            <LinkDiv>
                <Link className='Links' to='/dinerlogin'>Diner</Link>
                <Link className='Links' to='/operatorlogin'>Truck operator</Link>
            </LinkDiv>
        </LoginDiv>
            <Route path='/dinerlogin' component={LoginDiner} />
            <Route path='/operatorlogin' component={LoginOperator} />
            <Route path='/register' component={Register} />
        </div>
    )
}

export default LoginForm;