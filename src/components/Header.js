import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = () => {
  return (
    <div className="center-align">
      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Sistemas Embebidos</h1>        
      </header>
    </div>
  ) 
}

export default Header
