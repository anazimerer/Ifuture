import React from 'react';
import { render } from '@testing-library/react';

import { Router } from 'react-router-dom';
import {
  createMemoryHistory,
  createLocation,
  createBrowserHistory,
} from 'history';

import AddressPage from './index.js';

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
    route = '/address',
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

describe('AddressPage', () => {
  it('renders', () => {
    const route = '/address';

    const history = createBrowserHistory();

    // history.push('/signup', mockLocation.state);
    const location = createLocation(history);

    const utils = renderWithRouter(
      <AddressPage history={history} location={location} />,
      { route }
    );

    const name = utils.getByText('Meu endereço', { selector: 'h1' });

    expect(name);
  });
});
