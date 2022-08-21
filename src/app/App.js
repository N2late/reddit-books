import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Hero from '../features/components/hero/Hero';
import HomeDesktop from '../features/components/homepage/Home_desktop';
import HomeMobile from '../features/components/homepage/Home_mobile';
import Search from '../features/components/searchTerm/SearchTerm';

function App() {
  const handleMediaQueryChange = (matches) => (matches ? isDesktop : isMobile);
  const isDesktop = useMediaQuery({
    query: '(min-width: 787px)',
    undefined,
    handleMediaQueryChange,
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 786px)',
    undefined,
    handleMediaQueryChange,
  });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Hero />
          <Search />
        </header>
      </div>
      {isDesktop && <HomeDesktop />}
      {isMobile && <HomeMobile />}
    </>
  );
}

export default App;
