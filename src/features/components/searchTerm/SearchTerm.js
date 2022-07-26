import './search.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clearSearchIcon from '../../../img/searchIcons/cross-circle.svg';
import searchIcon from '../../../img/searchIcons/search.svg';
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from './searchTermSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img src={searchIcon} id="search-icon" alt="" />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="book, author..."
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onSearchTermClearHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearSearchIcon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Search;
