import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from '../features/components/hero/Hero';
import Search from '../features/components/searchTerm/SearchTerm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Hero />
          <Search />
        </header>
      </div>
    </Router>
  );
}

export default App;
