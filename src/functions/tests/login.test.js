import axios from 'axios';

import { login } from '../axios';

jest.mock('axios');

const axiosLogin = axios.post;

beforeEach(() => {
  axiosLogin.mockReset();
});

describe('login', () => {
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

    axiosLogin.mockResolvedValue({ data: resolvedData });

    const returnedData = await login();

    expect(returnedData).toEqual(resolvedData);
  });

  it('should catch errors', async () => {
    const resolvedData = {
      response: {
        data: {
          message: 'Usuário não encontrado',
        },
      },
    };

    axiosLogin.mockResolvedValue(Promise.reject(resolvedData));

    const returnedData = await login();

    expect(returnedData).toEqual(resolvedData.response.data);
  });
});
