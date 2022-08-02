import { configureStore } from '@reduxjs/toolkit';
import allCommentsReducer from '../features/components/comments/commentsSlice';
import allPostsReducer from '../features/components/posts/postsSlice';
import searchReducer from '../features/components/searchTerm/searchTermSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    allComments: allCommentsReducer,
    allPosts: allPostsReducer,
  },
});
