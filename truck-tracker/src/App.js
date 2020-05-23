import React from 'react';
import logo from './logo.svg';
import LoginForm from './Aaron_Components/Login';
import Register from './Aaron_Components/Register';
import NavComp from './Aaron_Components/NavBar';
import CustomerSurvey from './Aaron_Components/CustomerSurvey';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavComp />
      <LoginForm />
    </div>
  );
}

export default App;
