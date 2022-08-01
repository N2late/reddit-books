import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadComments = createAsyncThunk(
  'allComments/getAllComments',
  async (url) => {
    const jsonUrl = url + '.json';
    const res = await fetch(jsonUrl);
    const data = await res.json();
    return data[1].data.children;
  },
);

const sliceOptions = {
  name: 'allComments',
  initialState: {
    comments: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadComments.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadComments.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const allCommentsSlice = createSlice(sliceOptions);
export const selectAllComments = (state) => state.allComments.comments;
export default allCommentsSlice.reducer;
