import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getOrdersHistory } from '../../functions/axios';

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
} from "@material-ui/core";

import editIcon from "../../img/edit.svg";

import Footer from "../Footer";


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const user = JSON.parse(window.localStorage.getItem('labefood')).user;

  useEffect(() => {
    (async () => {
      const res = await getOrdersHistory();
      setOrders(res);
      setLoading(false);
    })();
  }, []);

  const handleEditButton = (path) => {
    history.push(`/orders/${path}`);
  };

  return (
    <Container style={{ height: "100vh", padding: 0 }} maxWidth="md">
      <AppBar>
        <Toolbar>
          <Typography style={{ margin: '0 auto' }}>Meu Perfil</Typography>
        </Toolbar>
      </AppBar>

      {/* Para Espaçamento */}
      <Toolbar />

      <Grid container>
        <Grid item xs={12}>
          <List>

            <ListItem style={{ borderBottom: '1px solid black' }}>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemText style={{ margin: 0 }} primary={user.name} />
                <ListItemText style={{ margin: 0 }} primary={user.email} />
                <ListItemText style={{ margin: 0 }} primary={user.cpf} />
              </Box>
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='edit'
                  onClick={() => handleEditButton('user')}
                >
                  <img
                    src={editIcon}
                    alt="Edit"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      objectFit: "contain",
                    }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem style={{ backgroundColor: "#eeeeee" }}>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <ListItemText
                  primary={

                    user.hasAddress ? (
                      <Typography style={{ color: '#b8b8b8' }}>
                        Endereço cadastrado
                      </Typography>
                    ) : (
                      <Typography style={{ color: '#b8b8b8' }}>
                        Nenhum endereço cadastrado
                      </Typography>
                    )
                  }
                  style={{ marginBottom: 0 }}
                />
                <ListItemText primary={user.hasAddress && user.address} />
              </Box>
              <ListItemSecondaryAction>

                <IconButton
                  edge='end'
                  aria-label='edit'
                  onClick={() => handleEditButton('address')}
                >
                  <img
                    src={editIcon}
                    alt="Edit"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      objectFit: "contain",
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
            marginTop: "0",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Box style={{ borderBottom: "1px solid black" }}>
            <Typography
              style={{
                fontSize: "1rem",
                letterSpacing: "-0.39px",
                padding: "0.5rem 0",
              }}
            >
              Histório de pedidos
            </Typography>
          </Box>

          <Grid
            container
            style={{ paddingBottom: "2rem", marginTop: "0.5rem" }}
          >
            {orders.length > 0 ? (
              orders.reverse().map((order) => {
                const date = new Date(order.expiresAt).toLocaleDateString(
                  "pt-br"
                );
                return (

                  <Grid
                    key={order.createdAt}
                    item
                    xs={12}
                    style={{ marginTop: '.5rem' }}
                  >
                    <Paper style={{ padding: '1rem' }}>
                      <Typography
                        style={{
                          color: "#e8222e",
                          fontSize: "1rem",
                          letterSpacing: "-0.39px",
                        }}
                      >
                        {order.restaurantName}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "-0.29px",
                          margin: "0.5rem 0",
                        }}
                      >
                        {date}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          letterSpacing: "-0.29px",
                        }}
                      >
                        SUBTOTAL R${order.totalPrice.toFixed(2)}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })
            ) : loading ? (
              <Grid item xs={12} style={{ marginTop: '.5rem' }}>
                <Typography inline='true' align='center'>
                  Buscando...
                </Typography>
              </Grid>
            ) : (

              <Grid item xs={12} style={{ marginTop: '.5rem' }}>
                <Typography inline='true' align='center'>
                  Você não realizou nenhum pedido
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </Container>
  );
};

export default OrdersPage;
