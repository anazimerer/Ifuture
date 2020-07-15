import axios from 'axios';

import { addAddress } from '../axios';

jest.mock('axios');

const axiosAddAddress = axios.put;

beforeEach(() => {
  axiosAddAddress.mockReset();
});

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

describe('addAddress', () => {
  it('should get user info and token from API', async () => {
    const resolvedData = {
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
    };

    axiosAddAddress.mockResolvedValue({ data: resolvedData });

    const returnedData = await addAddress();

    expect(returnedData).toEqual(resolvedData);
  });

  it('should catch errors', async () => {
    const resolvedData = {
      response: {
        data: {
          message: 'Email ou CPF já cadastrados',
        },
      },
    };

    axiosAddAddress.mockResolvedValue(Promise.reject(resolvedData));

    const returnedData = await addAddress();

    expect(returnedData).toEqual(resolvedData.response.data);
  });
});
