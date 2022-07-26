import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/components/searchTerm/searchTermSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
