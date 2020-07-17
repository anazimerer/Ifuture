import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders SplashScreen', () => {
  const utils = render(<App />);

  const containerElement = utils.getByTestId('container');
  const logo = utils.getByAltText('ifuture');

  expect(containerElement).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
