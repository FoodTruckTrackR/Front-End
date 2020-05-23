import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [operator, setOperator] = useState({
    username: "",
    password: "",
    truckName: "",
  });
  const dinerFormAppear = () => {
    let dinerForm = document.querySelector(".form-styling");
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
    <div className="nav-styling" />
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
        <form className="form-styling">
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
                  <button className="button-styling">Register</button>
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
              <tr>
                <td>Food Truck Name:</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Truck Name Here"
                    onChange={(e) => {
                      setOperator({ ...operator, truckName: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button-styling">Register</button>
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
