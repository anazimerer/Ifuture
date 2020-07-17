import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify({}));

jest.useFakeTimers();

describe('App', () => {
  it('renders SplashScreen', () => {
    const utils = render(<App />);

    const logoElement = utils.getByAltText('ifuture');

    // react-test-renderer
    expect(setTimeout).toHaveBeenNthCalledWith(1, expect.any(Function), 0);
    // setTimeout(useEffect)
    expect(setTimeout).toHaveBeenNthCalledWith(2, expect.any(Function), 3000);
    // timeout(Grow)
    expect(setTimeout).toHaveBeenNthCalledWith(3, expect.any(Function), 1500);

    expect(logoElement);
  });
});
