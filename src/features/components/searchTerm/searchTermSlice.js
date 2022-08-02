import { createSlice } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    clearSearchTerm: (state) => (state = ''),
  },
});

export const selectSearchTerm = (state) => state.search;
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
