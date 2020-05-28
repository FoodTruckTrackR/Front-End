import React from 'react';
import { Route } from 'react-router-dom';
import AddTruckComp from './Aaron_Components/Add_truck';
import LoginForm from './Aaron_Components/Login';
import LoginDiner from './Aaron_Components/Login_Diner';
import LoginOperator from './Aaron_Components/Login_Operator';
import NavComp from './Aaron_Components/NavBar';
import CustomerSurvey from './Aaron_Components/CustomerSurvey';
import Register from './Aaron_Components/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavComp />
      <AddTruckComp />
      <Route exact path='/' component={LoginForm} />
      <Route path='/dinerlogin' component={LoginDiner} />
      <Route path='/operatorlogin' component={LoginOperator} />
      <Route path='/register' component={Register} />
      <CustomerSurvey />
    </div>
  );
}

export default App;
