import searchReducer from './searchTermSlice';

describe('searchReducer', () => {
  test('adds a search term to the initialState', () => {
    const action = { type: 'search/setSearchTerm', payload: 'javier' };
    const state = '';

    const newState = searchReducer(state, action);

    const expectedState = 'javier';

    expect(newState).toStrictEqual(expectedState);
  });

  test('clears search term from the initialState', () => {
    const action = { type: 'search/clearSearchTerm' };
    const state = 'Javier';

    const newState = searchReducer(state, action);

    const expectedState = '';

    expect(newState).toStrictEqual(expectedState);
  });
});
