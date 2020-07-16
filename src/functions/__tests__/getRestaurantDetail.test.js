import axios from 'axios';

import { getRestaurantDetail } from '../axios';

jest.mock('axios');

const axiosGetRestaurantDetail = axios.get;

beforeEach(() => {
  axiosGetRestaurantDetail.mockReset();
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

describe('getRestaurantDetail', () => {
  it('should get restaurant items', async () => {
    const resolvedData = {
      restaurant: {
        products: [
          {
            id: '27h6GHfFofulBxNJCJvP',
            category: 'Refeição',
            description: 'A China chegou ao Brasil!',
            price: 29,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/262ca13a-464a-4748-bca3-8caefe805136/201905301228_xuPX_f.jpg',
            name: 'Frango Xadrez',
          },
          {
            id: '4qSWfYss7zueE9FmcFz3',
            price: 7.9,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/983b200e-d43b-469d-983b-900f717245db/201910211022_TzzT_c.jpg',
            name: 'Rolinho - Chocolate com Morango',
            category: 'Doce',
            description: 'O melhor chinês com o doce brasileiro',
          },
          {
            id: 'Fwn6yY1fYg53E5dx6FgY',
            category: 'Bebida',
            description: 'Diversas marcas',
            price: 5,
            photoUrl:
              'http://nabarcaoriental.com.br/wp-content/uploads/2017/08/165621012016-cervejas-garrafas.jpg',
            name: 'Long necks',
          },
          {
            id: 'Q52INKwP0b4ZsBLA3TQn',
            category: 'Refeição',
            description: 'A China chegou ao Brasil!',
            price: 40,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/262ca13a-464a-4748-bca3-8caefe805136/201905301227_vpSH_c.jpg',
            name: 'Choup suey',
          },
          {
            id: 'YZyLeQGfyI0Z4KcFQ8cA',
            category: 'Refeição',
            description: 'A China chegou ao Brasil!',
            price: 39,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/983b200e-d43b-469d-983b-900f717245db/201910252124_YLHx_.jpeg',
            name: 'Yakimeshi de camarão',
          },
          {
            id: 'gAMIrG0PTwIg4HxoPwAi',
            price: 9,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/983b200e-d43b-469d-983b-900f717245db/201911151349_aAzQ_g.jpg',
            name: 'Gyoza no vapor',
            category: 'Acompanhamento',
            description: 'A China chegou ao Brasil!',
          },
          {
            id: 'lebAdjSLzEWWuyT2SEdb',
            category: 'Bebida',
            description: 'Coca cola, Sprite ou Guaraná',
            price: 6.9,
            photoUrl:
              'https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg',
            name: 'Refrigerante',
          },
          {
            id: 'qOdnmdOp03oyYNhxMz3M',
            category: 'Refeição',
            description: 'A China chegou ao Brasil!',
            price: 35,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/262ca13a-464a-4748-bca3-8caefe805136/201802221854_12794433.png',
            name: 'Yakisoba',
          },
          {
            id: 'rGoqY3z4FZbWMv4skAKj',
            category: 'Refeição',
            description: 'A China chegou ao Brasil!',
            price: 36,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/262ca13a-464a-4748-bca3-8caefe805136/201802221932_23314846.jpg',
            name: 'Bifum chongqing',
          },
          {
            id: 'rsKI2k6f8QPDcM0Ixwrc',
            category: 'Refeição',
            description: 'A China chegou ao Brasil!',
            price: 34,
            photoUrl:
              'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/262ca13a-464a-4748-bca3-8caefe805136/201905301224_ftVs_c.jpg',
            name: 'Carne com brócolis',
          },
        ],
        id: '8',
        category: 'Asiática',
        name: 'Chun-Li',
        shipping: 17,
        description:
          'Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.',
        address: 'Rua Visconde de Mauá, 990 - Centro',
        logoUrl: 'http://soter.ninja/futureFoods/logos/chun-li.jpg',
        deliveryTime: 30,
      },
    };

    axiosGetRestaurantDetail.mockResolvedValue({ data: resolvedData });

    const returnedData = await getRestaurantDetail();

    expect(returnedData).toEqual(resolvedData.restaurant);
  });

  it('should catch errors', async () => {
    const resolvedData = {
      response: {
        data: {
          message: 'Não autorizado',
        },
      },
    };

    axiosGetRestaurantDetail.mockResolvedValue(Promise.reject(resolvedData));

    const returnedData = await getRestaurantDetail();

    expect(returnedData).toEqual(resolvedData.response.data);
  });
});
