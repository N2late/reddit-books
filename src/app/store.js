import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchTerm/searchTermSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
