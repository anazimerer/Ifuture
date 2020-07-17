import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import ProductCard from './index';

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
      id: 'Lz8VMNffzC1VKvnyw2s4',
      name: 'renan',
      email: 're@re',
      cpf: '123.123.123-21',
      hasAddress: true,
      address: 'R. Afonso Brazadão, 177, 71 - Vila N. Conceição',
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikx6OFZNTmZmekMxVkt2bnl3MnM0IiwibmFtZSI6InJlbmFuIiwiZW1haWwiOiJyZUByZSIsImNwZiI6IjEyMy4xMjMuMTIzLTIxIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6YWTDo28sIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNTk0NzQzNTQyfQ.Bon0bvrhIUSBNsaoknmrCsL7i0v39hxQauw8ZvNAkw0',
  })
);

jest.mock('../../contexts/StoreContext', () => ({
  value: {
    products: [],
    cart: [],
    restaurantInfo: null,
    activeOrder: null,
  },
}));

describe('ProductCard', () => {
  axios.mockResolvedValue({ data: { orders: [] } });
  axios.mockResolvedValue(
    Promise.reject({ response: { data: { message: 'error' } } })
  );

  // it('renders card', () => {
  //   const utils = render(
  //     <ProductCard
  //       product={{
  //         name: 'a',
  //         quantity: '1',
  //         photoUrl: 'a',
  //         price: 10,
  //         description: 'a',
  //       }}
  //       restaurantInfo={undefined}
  //     />
  //   );

  //   const cardElement = utils.getByTestId('card');

  //   expect(cardElement).toBeInTheDocument();
  // });
});
