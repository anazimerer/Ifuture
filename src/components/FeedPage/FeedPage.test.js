import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import axios from 'axios';

import {
  useLocation,
  Router,
  MemoryRouter,
  useHistory,
} from 'react-router-dom';
import {
  createMemoryHistory,
  createLocation,
  createBrowserHistory,
} from 'history';

import FeedPage from './index.js';

const mockLocation = {
  state: {
    allowsUpdate: false,
    capabilityType: {
      capabilityTypeCode: 'UITest',
      description: null,
      effectiveDate: null,
      endDate: null,
      id: null,
    },
    deActivationReason: null,
    description: 'View Test Description',
    effectiveDate: '2019-02-07T14:12:12',
    endDate: '2019-05-10T12:12:12',
    id: 2,
    name: 'CustomerTest',
    reActivationReason: null,
    shortName: 'CustomerTest',
    system: {
      effectiveDate: null,
      endDate: null,
      id: null,
      name: 'CustomerTest',
    },
  },
};

function renderWithRouter(
  ui,
  {
    route = '/feed',
    history = createMemoryHistory({
      initialEntries: [route, mockLocation.state],
    }),
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding history to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
    mockLocation,
  };
}

jest.mock('axios');

window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify({}));

axios.get.mockResolvedValue({
  data: {
    restaurants: [
      {
        id: '1',
        logoUrl: 'a',
        shipping: 1,
        name: 'a',
      },
    ],
  },
});
axios.get.mockResolvedValue(
  Promise.reject({ response: { data: { message: 'error' } } })
);

describe('FeedPage', () => {
  it('renders', () => {
    const route = '/feed';

    const history = createBrowserHistory();

    // history.push('/signup', mockLocation.state);
    const location = createLocation(history);

    const utils = renderWithRouter(
      <FeedPage history={history} location={location} />,
      { route }
    );

    const title = utils.getByText('Ifuture');

    expect(title);
  });
});
