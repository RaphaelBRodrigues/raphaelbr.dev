import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the init section', () => {
    render(<App />);
    const $welcomeElement = screen.getByText('Be Welcome!');

    expect($welcomeElement).toBeInTheDocument();
  });
});
