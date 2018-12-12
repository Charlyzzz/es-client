import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = () => {
  return (
    <div className="center-align">
      <header className="header">        
        <img src={logo} className="logo" alt="logo"/>
        <h1 className="title">Sistemas Embebidos</h1>        
      </header>
    </div>
  ) 
}

export default Header
