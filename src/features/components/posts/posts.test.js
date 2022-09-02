import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { PreviewPost } from '../homepage/Home_desktop';
import allPostsReducer, { urlToFetch } from './postsSlice';

const state = {
  posts: [],
  isLoading: false,
  hasError: false,
};

describe('allPostsReducer', () => {
  test('sets loading to true', () => {
    const action = { type: 'allPosts/getPosts/pending' };

    const newState = allPostsReducer(state, action);

    const expectedState = {
      posts: [],
      isLoading: true,
      hasError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });

  test('sets posts when loadPosts is fulfilled', () => {
    const action = { type: 'allPosts/getPosts/fulfilled', payload: 1 };

    const newState = allPostsReducer(state, action);

    const expectedState = {
      posts: 1,
      isLoading: false,
      hasError: false,
    };
    expect(newState).toStrictEqual(expectedState);
  });

  test('sets hasError to true', () => {
    const action = { type: 'allPosts/getPosts/rejected' };

    const newState = allPostsReducer(state, action);

    const expectedState = {
      posts: [],
      isLoading: false,
      hasError: true,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});

describe('urlToFetch', () => {
  test('returns the new url to fetch based on the search param', () => {
    const searchTerm = 'javier';
    const expectedState =
      'https://www.reddit.com/search.json?q=book%20OR%20books%20javier';

    const receivedOutput = urlToFetch(searchTerm);

    expect(expectedState).toStrictEqual(receivedOutput);
  });
});

describe('loadPosts', () => {
  test('renders votes and posted', () => {
    const post = {
      data: {
        id: 1,
        name: 'someName',
        ups: 5,
        author: 'Richard',
        created_utc: 1630571850,
        title: 'Some great title',
        url_overridden_by_dest: false,
        selftext: 'Amazing self text in here.',
        num_comments: 24,
      },
    };

    render(
      <Provider store={store}>
        <PreviewPost postPreview={post} key={post.data.id} />
      </Provider>,
    );

    expect(screen.getByText('Votes')).toBeInTheDocument();
    expect(screen.getByText('Richard')).toBeInTheDocument();
    expect(screen.getByText(/posted/i)).toBeInTheDocument();
  });
});
