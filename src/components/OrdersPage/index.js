import React from 'react';

import {
  Container,
  AppBar,
  Toolbar,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from '@material-ui/core';

import editIcon from '../../img/edit.svg';

const userMock = {
  id: 'De8UACSFgFySnKdXm5hI',
  name: 'Astrodev',
  email: 'astrodev@future4.com',
  cpf: '111.111.111-11',
  hasAddress: true,
  address: 'R. Afonso Braz, 177 - Vila N. Conceição',
};

const ordersMock = [
  {
    totalPrice: 12,
    restaurantName: 'Habibs',
    createdAt: 1592776888220,
    expiresAt: 1592780488220,
  },
  {
    totalPrice: 31.9,
    restaurantName: 'McDonalds',
    createdAt: 1592580176733,
    expiresAt: 1592581076733,
  },
  {
    totalPrice: 31.9,
    restaurantName: 'McDonalds',
    createdAt: 1592578036786,
    expiresAt: 1592578936786,
  },
  {
    totalPrice: 37.3,
    restaurantName: 'Tadashii',
    createdAt: 1592493955887,
    expiresAt: 1592496955887,
  },
  {
    totalPrice: 37.3,
    restaurantName: 'Tadashii',
    createdAt: 1592493955887,
    expiresAt: 1592496955887,
  },
];

const OrdersPage = () => {
  return (
    <Container style={{ height: '100vh', padding: 0 }} maxWidth='md'>
      <AppBar>
        <Toolbar>oie</Toolbar>
      </AppBar>

      {/* Para Espaçamento */}
      <Toolbar />

      <Grid container>
        <Grid item xs={12}>
          <List>
            <ListItem style={{ borderBottom: '1px solid black' }}>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemText style={{ margin: 0 }} primary={userMock.name} />
                <ListItemText style={{ margin: 0 }} primary={userMock.email} />
                <ListItemText style={{ margin: 0 }} primary={userMock.cpf} />
              </Box>
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <img
                    src={editIcon}
                    alt='Edit'
                    style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      objectFit: 'contain',
                    }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem style={{ backgroundColor: '#eeeeee' }}>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemText
                  primary={
                    userMock.hasAddress ? (
                      <Typography style={{ color: '#b8b8b8' }}>
                        Endereço cadastro
                      </Typography>
                    ) : (
                      'Sem endereço'
                    )
                  }
                  style={{ marginBottom: 0 }}
                />
                <ListItemText
                  primary={userMock.hasAddress && userMock.address}
                />
              </Box>
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <img
                    src={editIcon}
                    alt='Edit'
                    style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      objectFit: 'contain',
                    }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            marginTop: '0',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <Box style={{ borderBottom: '1px solid black' }}>
            <Typography
              style={{
                fontSize: '1rem',
                letterSpacing: '-0.39px',
                padding: '0.5rem 0',
              }}
            >
              Histório de pedidos
            </Typography>
          </Box>

          <Grid
            container
            style={{ paddingBottom: '2rem', marginTop: '0.5rem' }}
          >
            {ordersMock ? (
              ordersMock.reverse().map((order) => {
                const date = new Date(order.expiresAt).toLocaleDateString(
                  'pt-br'
                );
                return (
                  <Grid item xs={12} style={{ marginTop: '.5rem' }}>
                    <Paper style={{ padding: '1rem' }}>
                      <Typography
                        style={{
                          color: '#e8222e',
                          fontSize: '1rem',
                          letterSpacing: '-0.39px',
                        }}
                      >
                        {order.restaurantName}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '0.75rem',
                          letterSpacing: '-0.29px',
                          margin: '0.5rem 0',
                        }}
                      >
                        {date}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          letterSpacing: '-0.29px',
                        }}
                      >
                        SUBTOTAL R${order.totalPrice.toFixed(2)}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })
            ) : (
              <Grid item xs={12} style={{ marginTop: '.5rem' }}>
                <Typography>Você não realizou nenhum pedido</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <AppBar position='fixed' style={{ top: 'auto', bottom: 0 }}>
        tchau
      </AppBar>
    </Container>
  );
};

export default OrdersPage;
