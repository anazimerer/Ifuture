import axios from 'axios';

import { signup } from '../axios';

jest.mock('axios');

const axiosSignup = axios.post;

beforeEach(() => {
  axiosSignup.mockReset();
});

describe('signup', () => {
  it('should get user info and token from API', async () => {
    const resolvedData = {
      user: {
        id: 'Lz8VMNffzC1VKvnyw2s4',
        name: 'renan',
        email: 're@re',
        cpf: '123.123.123-21',
        hasAddress: false,
        address: 'R. Afonso Brazadão, 177, 71 - Vila N. Conceição',
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikx6OFZNTmZmekMxVkt2bnl3MnM0IiwibmFtZSI6InJlbmFuIiwiZW1haWwiOiJyZUByZSIsImNwZiI6IjEyMy4xMjMuMTIzLTIxIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6YWTDo28sIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNTk0NzQzNTQyfQ.Bon0bvrhIUSBNsaoknmrCsL7i0v39hxQauw8ZvNAkw0',
    };

    axiosSignup.mockResolvedValue({ data: resolvedData });

    const returnedData = await signup();

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

    axiosSignup.mockResolvedValue(Promise.reject(resolvedData));

    const returnedData = await signup();

    expect(returnedData).toEqual(resolvedData.response.data);
  });
});
