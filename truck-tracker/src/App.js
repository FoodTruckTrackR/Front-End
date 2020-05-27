import React from 'react';
import AddTruckComp from './Aaron_Components/Add_truck';
import LoginForm from './Aaron_Components/Login';
import Register from './Aaron_Components/Register';
import NavComp from './Aaron_Components/NavBar';
import CustomerSurvey from './Aaron_Components/CustomerSurvey';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavComp />
      <AddTruckComp />
      <LoginForm />
      <CustomerSurvey />
    </div>
  );
}

export default App;
