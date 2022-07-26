import './search.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clearSearchIcon from '../../../img/searchIcons/cross-circle.svg';
import searchIcon from '../../../img/searchIcons/search.svg';
import {
  clearSearchTerm,
  selectSearch,
  setSearchTerm,
} from './searchTermSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearch);

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
        placeholder="What do you want to know? :)"
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
