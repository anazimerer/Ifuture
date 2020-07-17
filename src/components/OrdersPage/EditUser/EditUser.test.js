import React from 'react';
import { render } from '@testing-library/react';

import { Router } from 'react-router-dom';
import {
  createMemoryHistory,
  createLocation,
  createBrowserHistory,
} from 'history';

import EditUser from './index.js';
import useForm from '../../../hooks/useForm.js';

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
    route = '/orders/user',
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

describe('EditUser', () => {
  it('renders', () => {
    const route = '/orders/user';

    const history = createBrowserHistory();

    // history.push('/signup', mockLocation.state);
    const location = createLocation(history);

    const utils = renderWithRouter(
      <EditUser history={history} location={location} />,
      { route }
    );

    const usernameElement = utils.getByPlaceholderText('Nome e sobrenome');

    expect(usernameElement);
  });
});
