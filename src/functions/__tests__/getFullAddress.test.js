import axios from 'axios';

import { getFullAddress } from '../axios';

jest.mock('axios');

const axiosGetFullAddress = axios.get;

beforeEach(() => {
  axiosGetFullAddress.mockReset();
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

describe('getFullAddress', () => {
  it('should get user address info', async () => {
    const resolvedData = {
      address: {
        neighbourhood: 'Vila N. Conceição',
        number: '177',
        city: 'São Paulo',
        apartment: null,
        state: 'SP',
        street: 'R. Afonso Braz',
      },
    };

    axiosGetFullAddress.mockResolvedValue({ data: resolvedData });

    const returnedData = await getFullAddress();

    expect(returnedData).toEqual(resolvedData.address);
  });

  it('should catch errors', async () => {
    const resolvedData = {
      response: {
        data: {
          message: 'Não autorizado',
        },
      },
    };

    axiosGetFullAddress.mockResolvedValue(Promise.reject(resolvedData));

    const returnedData = await getFullAddress();

    expect(returnedData).toEqual(resolvedData.response.data);
  });
});
