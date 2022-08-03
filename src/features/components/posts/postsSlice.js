import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
  'allPosts/getPosts',
  async (searchTerm) => {
    let url = urlToFetch(searchTerm);
    const res = await fetch(url);
    const data = await res.json();
    return data.data.children;
  },
);

export const loadCommunityPosts = createAsyncThunk(
  'allCommunityPosts/getCommunityPosts',
  async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.data.children;
  },
);

const sliceOptions = {
  name: 'allPosts',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [loadCommunityPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCommunityPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCommunityPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const allPostsSlice = createSlice(sliceOptions);
export const selectPosts = (state) => state.allPosts.posts;
export default allPostsSlice.reducer;

export function urlToFetch(searchTerm) {
  let url = 'https://www.reddit.com/search.json?q=book%20OR%20books';
  if (!searchTerm) {
    return url;
  } else {
    let searchArr = searchTerm.split(' ');
    for (let word of searchArr) {
      url += `%20${word}`;
    }
  }
  return url;
}
