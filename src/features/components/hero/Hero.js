import '../../../app/App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../../img/logo2.png';
import { loadPosts } from '../posts/postsSlice';
import { clearSearchTerm } from '../searchTerm/searchTermSlice';

export const Hero = () => {
  const dispatch = useDispatch();

  const returnHomeHandler = () => {
    dispatch(clearSearchTerm());
    dispatch(loadPosts(''));
  };

  return (
    <div className="header-title" onClick={returnHomeHandler}>
      <img className="App-logo" src={logo} alt="Reddit Books" />
      <h1 className="title">
        <span>Reddit</span> Books
      </h1>
    </div>
  );
};

export default Hero;
