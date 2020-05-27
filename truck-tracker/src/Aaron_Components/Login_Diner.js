import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormStyle = styled.form`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  width: 50%;
  margin-left: 25%;
  background-color: rgba(222, 100, 89, 0.8);
  color: aliceblue;
`;
const ErrorStyle = styled.p`
  color: red;
  font-size: 100%;
`;
const userSchema = yup.object().shape({
  username: yup.string().required("Please input your username"),
  password: yup.string().required("Please input your valid password"),
});

const LoginDiner = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    userType: "diner",
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

  const userSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://git.heroku.com/foodtruck-traker.git/dinersRouter/login",
        user
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <FormStyle className="form-styling" onSubmit={userSubmit}>
      <h5>Diner Login</h5>
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
        <button className="button-styling" type="submit">
          Login
        </button>
        <Link path to="/register">
          <button className="button-styling">Register</button>
        </Link>
      </div>
    </FormStyle>
  );
};

export default LoginDiner;
