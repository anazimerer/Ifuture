import { cleanup } from '@testing-library/react';

import axios from 'axios';

import testHook from '../testHook';
import useRestaurantDetail from '../useRestaurantDetail';

let restaurantInfo;
let resolvedValue;

jest.mock('axios');
axios.get.mockResolvedValue({
  data: resolvedValue,
});

axios.get.mockResolvedValue(
  Promise.reject({ response: { data: { message: resolvedValue } } })
);

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

beforeEach(() => {
  testHook(() => {
    [restaurantInfo] = useRestaurantDetail();
  });
});

afterEach(() => {
  cleanup();
});

describe('useRestaurantDetail', () => {
  it('should return resolved restaurant info', () => {
    expect(restaurantInfo).toBe(resolvedValue);
  });
});
