import React from 'react';
import { render } from '@testing-library/react';

import { Router } from 'react-router-dom';
import {
  createMemoryHistory,
  createLocation,
  createBrowserHistory,
} from 'history';

import SearchPage from './index.js';

window.localStorage.__proto__.getItem = jest.fn(() =>
  JSON.stringify({
    user: {
      name: 'a',
      email: 'a',
      cpf: 'a',
    },
  })
);

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
    route = '/search',
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

describe('SearchPage', () => {
  it('renders', () => {
    const route = '/search';

    const history = createBrowserHistory();

    // history.push('/signup', mockLocation.state);
    const location = createLocation(history);

    const utils = renderWithRouter(
      <SearchPage history={history} location={location} />,
      { route }
    );

    const searchElement = utils.getByPlaceholderText('Restaurante');

    expect(searchElement);
  });
});
