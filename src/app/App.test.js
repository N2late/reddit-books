import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App, { Hero, HomeDesktop, HomeMobile, Search } from './App';
import { store } from './store';

describe('Hero', () => {
  test('renders reddit and books words', () => {
    render(
      <Provider store={store}>
        <Hero />
      </Provider>,
    );

    expect(screen.getByText(/reddit/i)).toBeInTheDocument();
    expect(screen.getByText(/books/i)).toBeInTheDocument();
  });
});

describe('Search', () => {
  test('renders the input field with its placeholder', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    expect(screen.getByPlaceholderText('book, author...')).toBeInTheDocument();
  });
});

describe('Home', () => {
  function responsiveDisplay(width) {
    return width >= 787 ? true : false;
  }

  test('renders HomeDesktop when the width is bigger than 787px', () => {
    let isDesktop = responsiveDisplay(1000);
    if (isDesktop) {
      render(
        <Provider store={store}>
          <HomeDesktop />
        </Provider>,
      );
    }

    expect(screen.getByText(/RomanceBooks/i)).toBeInTheDocument();
  });

  test('renders HomeDesktop when the screen width is equal to 787px', () => {
    let isDesktop = responsiveDisplay(787);
    if (isDesktop) {
      render(
        <Provider store={store}>
          <HomeDesktop />
        </Provider>,
      );
    }

    expect(screen.getByText(/RomanceBooks/i)).toBeInTheDocument();
  });

  test('renders HomeMobile when the screen width is less than 787px', () => {
    let isDesktop = responsiveDisplay(525);
    if (!isDesktop) {
      render(
        <Provider store={store}>
          <HomeMobile />
        </Provider>,
      );
    }

    expect(screen.queryByAltText(/RomanceBooks/i)).not.toBeInTheDocument();
  });
});
