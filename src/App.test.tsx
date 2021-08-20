import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import matchMediaMock from './__mocks__/matchMedia';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    matchMediaMock();
  });
  it('should render the init section', () => {
    render(<App />);

    const $welcomeElement = screen.getByText('Be Welcome!');

    expect($welcomeElement).toBeInTheDocument();
  });
});
