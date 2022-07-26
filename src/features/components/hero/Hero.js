import '../../../app/App.css';
import React from 'react';
import logo from '../../../img/logo2.png';

export const Hero = () => {
  return (
    <div className="header-title">
      <img className="App-logo" src={logo} alt="Reddit Books" />
      <h1 className="title">
        <span>Reddit</span> Books
      </h1>
    </div>
  );
};

export default Hero;
