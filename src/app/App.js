import './App.css';
import React from 'react';
import Search from '../features/searchTerm/SearchTerm';
import logo from '../img/logo2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
          <img className="App-logo" src={logo} alt="Reddit Books" />
          <h1 className="title">Reddit Books</h1>
        </div>
        <Search />
      </header>
    </div>
  );
}

export default App;
