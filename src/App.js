// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Welcome from './components/Welcome'

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

 
  useEffect(() => {
    let token;
    
    if(!localStorage.getItem('jwtToken')){
      setIsAuthenticated(false)
      console.log('======> Authenticated is Now FALSE')
    }else{
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.getItem('jwtToken'))
      setCurrentUser(token)
    }
  }, []);

  return (
    <div className="App">
      <h1>MERN Authentication</h1>
      <Signup />
    </div>
  );
}

export default App;
