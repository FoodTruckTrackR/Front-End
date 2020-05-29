import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [operator, setOperator] = useState({
    username: "",
    password: "",
  });

  const operatorPost = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://foodtruck-trackr.herokuapp.com/operators/register",
        operator
      )
      .then((res) => {
        console.log(res)
        if(res.statusText === 'Created'){
          alert("You have successfully Registered")
          props.history.push('/');
          }else{
            alert("Registration unsuccessfull")
          }
        })
      .catch((err) => console.log("error", err));
  }

  const dinerPost = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://foodtruck-trackr.herokuapp.com/diners/register",
        user
      )
      .then((res) =>{
        if(res.statusText === 'Created'){
        alert("You have successfully Registered")
        props.history.push('/');
        }else{
          alert("Registration unsuccessfull")
        }
      })
      .catch((err) => console.log(err));
  };

  const dinerFormAppear = () => {
    let dinerForm = document.querySelector(".form-styling-Stephanie");
    if (dinerForm.style.display === "flex") {
      dinerForm.style.display = "none";
    } else {
      dinerForm.style.display = "flex";
    }
  };

  const FoodTruckOperatorFormAppear = () => {
    let foodTruckOperatorForm = document.querySelector(".form-styling-two");
    if (foodTruckOperatorForm.style.display === "flex") {
      foodTruckOperatorForm.style.display = "none";
    } else {
      foodTruckOperatorForm.style.display = "flex";
    }
  };

  return (
    <>
      <div className="container">
        <div className="registration-buttons">
          <button
            className="registration-button-styling"
            onClick={FoodTruckOperatorFormAppear}
          >
            Food Truck Operator
          </button>
          <button
            className="registration-button-styling"
            onClick={dinerFormAppear}
          >
            Diner
          </button>
        </div>
        <div className="form-container">
          <form className="form-styling-Stephanie">
            <p>~Diner Registration Form~</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Username:</p>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Username Here"
                      onChange={(e) => {
                        setUser({ ...user, username: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Password:</p>
                  </td>
                  <td>
                    <input
                      type="password"
                      placeholder="Enter Password Here"
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={dinerPost} className="button-styling">Register</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <form className="form-styling-two">
            <p>~Operator Registration Form~</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Username:</p>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Username Here"
                      onChange={(e) => {
                        setOperator({ ...operator, username: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Password:</p>
                  </td>
                  <td>
                    <input
                      type="password"
                      placeholder="Enter Password Here"
                      onChange={(e) => {
                        setOperator({ ...operator, password: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td>
                    <button onClick={operatorPost} className="button-styling">
                      Register
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
