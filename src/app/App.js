import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from '../features/components/hero/Hero';
import { Home } from '../features/components/homepage/home';
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
