import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {connect, useDispatch} from 'react-redux';
import {actionLogin} from './Action';

const FormStyle = styled.form`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    width: 50%;
    margin-left: 25%;
    background-color: rgb(254, 104, 0, 0.8);
    color: #51240f;
`


const ErrorStyle = styled.p`
  color: red;
  font-size: 100%;
`;

const userSchema = yup.object().shape({
  username: yup.string().required("Please input your username"),
  password: yup.string().required("Please input your valid password"),
});

const LoginOperator = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    username: "",
    password: "",
  });

  const validateUser = (event) => {
    yup
      .reach(userSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setUserError({
          ...userError,
          [event.target.name]: "",
        });
      })
      .catch((error) => {
        setUserError({
          ...userError,
          [event.target.name]: error.errors[0],
        });
      });
  };

  const userChange = (event) => {
    event.persist();
    validateUser(event);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const dispatch = useDispatch();
  const userSubmit = (e) => {
    e.preventDefault();
    actionLogin(user)(dispatch);
    if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
    props.history.push('/operator/profile')
    }else{
      return;
    }
    setUser({
      username: "",
      password: "",
    });
  };


  return (
    <FormStyle className="form-styling" onSubmit={userSubmit}>
      <h5>Operator login</h5>
      <label>
        Username:
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={userChange}
        />
        {userError.username.length > 0 ? (
          <ErrorStyle>{userError.username}</ErrorStyle>
        ) : null}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={userChange}
        />
        {userError.password.length > 0 ? (
          <ErrorStyle>{userError.password}</ErrorStyle>
        ) : null}
      </label>
      <div className="flex-buttons">
        <button className="button-styling" onClick={userSubmit}>
          Login
        </button>
        <Link path to="/register">
          <button className="button-styling">Register</button>
        </Link>
      </div>
    </FormStyle>
  );
};


export default LoginOperator;