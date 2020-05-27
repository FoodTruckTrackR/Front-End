import React from 'react';
import { Route } from 'react-router-dom';
import AddTruckComp from './Aaron_Components/Add_truck';
import LoginForm from './Aaron_Components/Login';
import NavComp from './Aaron_Components/NavBar';
import CustomerSurvey from './Aaron_Components/CustomerSurvey';
import './App.css';
import axios from 'axios';

axios.get('https://foodtruck-trackr.herokuapp.com/diners')
.then(response => console.log(response.data))
.catch(error => console.log(error))

function App() {
  return (
    <div className="App">
      <NavComp />
      <AddTruckComp />
      <Route path='/' component={LoginForm} />
      <CustomerSurvey />
    </div>
  );
}

export default App;
