import axios from 'axios';

import { getRestaurants } from '../axios';

jest.mock('axios');

const axiosGetRestaurants = axios.get;

beforeEach(() => {
  axiosGetRestaurants.mockReset();
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

describe('getRestaurants', () => {
  it('should get all restaurants', async () => {
    const resolvedData = {
      restaurants: [
        {
          id: '1',
          description:
            "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
          shipping: 6,
          address: 'Rua das Margaridas, 110 - Jardim das Flores',
          name: 'Habibs',
          logoUrl: 'http://soter.ninja/futureFoods/logos/habibs.jpg',
          deliveryTime: 60,
          category: 'Árabe',
        },
        {
          id: '10',
          address: 'Travessa Reginaldo Pereira, 130 - Ibitinga',
          name: 'Tadashii',
          logoUrl: 'http://soter.ninja/futureFoods/logos/tadashii.png',
          deliveryTime: 50,
          category: 'Asiática',
          description:
            'Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.',
          shipping: 13,
        },
        {
          id: '2',
          description:
            "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
          shipping: 19,
          address: 'Avenida dos Papagaios, 1350 - Sta. Efigênia',
          name: 'McDonalds',
          logoUrl: 'http://soter.ninja/futureFoods/logos/mcdonalds.png',
          deliveryTime: 15,
          category: 'Hamburguer',
        },
        {
          id: '3',
          deliveryTime: 20,
          category: 'Italiana',
          description:
            'Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica',
          shipping: 2,
          address: 'Rua Barão do Rio Branco, 98 - Centro',
          name: 'Cantina Mamma Perrotta',
          logoUrl:
            'http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg',
        },
        {
          id: '4',
          name: 'Sorveteria Bacio di Latte',
          logoUrl: 'http://soter.ninja/futureFoods/logos/baciodilatte.png',
          deliveryTime: 45,
          category: 'Sorvetes',
          description:
            'Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!',
          shipping: 10,
          address: 'Travessa Junqueira de Melo, 315 - Marginal',
        },
        {
          id: '5',
          deliveryTime: 20,
          category: 'Carnes',
          description:
            'Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano',
          shipping: 18,
          address: 'Alameda dos Marsupiais, 505 - Humaitá',
          name: 'Outback Steakhouse',
          logoUrl: 'http://soter.ninja/futureFoods/logos/outback.png',
        },
        {
          id: '6',
          description:
            'Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.',
          shipping: 4,
          address: 'Rua Dorival Caymmi, 149 - Alto dos Ibirás',
          name: 'Sotero Cozinha Original',
          logoUrl: 'http://soter.ninja/futureFoods/logos/sotero.jpg',
          deliveryTime: 40,
          category: 'Baiana',
        },
        {
          id: '7',
          name: 'Boteco de Portal',
          logoUrl: 'http://soter.ninja/futureFoods/logos/botecodeportal.jpg',
          deliveryTime: 20,
          category: 'Petiscos',
          description:
            'O bar tem um cardápio recheado de petiscos que acompanham o chope para o bate-papo num ambiente agradável.Amigos e amigas, temos o prazer de convidar vocês para conhecer nosso espaço!',
          shipping: 18,
          address: 'Avenida das Andorinhas, 333 - Sta. Efigênia',
        },
        {
          id: '8',
          name: 'Chun-Li',
          logoUrl: 'http://soter.ninja/futureFoods/logos/chun-li.jpg',
          deliveryTime: 30,
          category: 'Asiática',
          description:
            'Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.',
          shipping: 17,
          address: 'Rua Visconde de Mauá, 990 - Centro',
        },
        {
          id: '9',
          name: 'Mexicaníssimo',
          logoUrl: 'http://soter.ninja/futureFoods/logos/mexicanissimo.png',
          deliveryTime: 20,
          category: 'Mexicana',
          description:
            'Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos.',
          shipping: 3,
          address: 'Largo dos Jaguarés, 12 - Nova Bragança',
        },
      ],
    };

    axiosGetRestaurants.mockResolvedValue({ data: resolvedData });

    const returnedData = await getRestaurants();

    expect(returnedData).toEqual(resolvedData.restaurants);
  });

  it('should catch errors', async () => {
    const resolvedData = {
      response: {
        data: {
          message: 'Não autorizado',
        },
      },
    };

    axiosGetRestaurants.mockResolvedValue(Promise.reject(resolvedData));

    const returnedData = await getRestaurants();

    expect(returnedData).toEqual(resolvedData.response.data);
  });
});
