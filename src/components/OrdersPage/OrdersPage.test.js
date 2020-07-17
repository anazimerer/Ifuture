import React from 'react';
import { render } from '@testing-library/react';

import axios from 'axios';

import { getOrdersHistory } from '../../functions/axios';

import OrdersPage from './index';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    goBack: jest.fn(),
  }),
  useLocation: () => ({
    pathname: jest.fn(),
  }),
  useParams: () => ({
    restaurantId: jest.fn(),
  }),
}));

jest.mock('axios');

jest.spyOn(window.localStorage.__proto__, 'getItem');
window.localStorage.__proto__.getItem = jest.fn(() =>
  JSON.stringify({
    user: {
      id: 'De8UACSFgFySnKdXm5hI',
      name: 'Astrodev',
      email: 'astrodev@future4.com',
      cpf: '111.111.111-11',
      hasAddress: true,
      address: 'R. Afonso Braz, 177 - Vila N. Conceição',
    },
  })
);

const axiosGetOrdersHistory = axios.get;

beforeEach(() => {
  axiosGetOrdersHistory.mockReset();
});

describe('OrdersPage', () => {
  it('renders without crashing', () => {
    axiosGetOrdersHistory.mockResolvedValue({ data: { orders: [] } });
    axiosGetOrdersHistory.mockResolvedValue(
      Promise.reject({ response: { data: { message: 'error' } } })
    );

    const utils = render(<OrdersPage />);

    const containerElement = utils.getByTestId('container');

    expect(containerElement).toBeInTheDocument();
  });
});
