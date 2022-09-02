import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { AllComments } from '../posts/Preview-post';
import { Comment } from './AllComments';
import allCommentsReducer from './commentsSlice';

const state = {
  comments: [],
  isLoading: false,
  hasError: false,
};

const comment = {
  id: 1,
  ups: 5,
  author: 'Richard',
  created_utc: 1630571850,
  body: 'Amazing self text in here.',
};

describe('allCommentsReducer', () => {
  test('sets loading to true', () => {
    const action = { type: 'allComments/getAllComments/pending' };

    const newState = allCommentsReducer(state, action);

    const expectedState = {
      comments: [],
      isLoading: true,
      hasError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });

  test('sets comment when loadPosts is fulfilled', () => {
    const action = {
      type: 'allComments/getAllComments/fulfilled',
      payload: {
        id: 1,
        ups: 5,
        author: 'Richard',
        created_utc: 1630571850,
        body: 'Amazing self text in here.',
      },
    };

    const newState = allCommentsReducer(state, action);

    const expectedState = {
      comments: {
        id: 1,
        ups: 5,
        author: 'Richard',
        created_utc: 1630571850,
        body: 'Amazing self text in here.',
      },
      isLoading: false,
      hasError: false,
    };
    expect(newState).toStrictEqual(expectedState);
  });

  test('sets hasError to true', () => {
    const action = { type: 'allComments/getAllComments/rejected' };

    const newState = allCommentsReducer(state, action);

    const expectedState = {
      comments: [],
      isLoading: false,
      hasError: true,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});

describe('renders Comment', () => {
  test('renders comment and Votes and author value', () => {
    render(
      <Provider store={store}>
        <Comment comment={comment} key={comment.id} />
      </Provider>,
    );

    expect(screen.getByText('Votes')).toBeInTheDocument();
    expect(screen.getByText('Richard')).toBeInTheDocument();
    expect(screen.getByText(/commented/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
});

describe('AllComments', () => {
  test('renders AllComments component', () => {
    render(
      <Provider store={store}>
        <AllComments />
      </Provider>,
    );
  });
});
