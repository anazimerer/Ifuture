import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../../contexts/StoreContext";

import { getOrdersHistory } from "../../functions/axios";

import Header from "../Header";

import editIcon from "../../img/edit.svg";

import {
  Container,
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

import { useStyles } from "./styles";

const OrdersPage = () => {
  const storeContext = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const classes = useStyles();

  const user = JSON.parse(window.localStorage.getItem("labefood")).user;

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
    <Container
      maxWidth="md"
      className={classes.container}
      data-testid="container"
    >
      <Header back={false} title="Meu Perfil" />
      <div
        style={{
          marginBottom: storeContext.state.activeOrder ? "9rem" : "2rem",
        }}
      >
        {/* Para Espaçamento */}
        <Toolbar />
        <Grid container>
          <Grid item xs={12}>
            <List>
              <ListItem className={classes.userListItem}>
                <Box className={classes.listBox}>
                  <ListItemText
                    className={classes.noMargin}
                    primary={user.name}
                  />
                  <ListItemText
                    className={classes.noMargin}
                    primary={user.email}
                  />
                  <ListItemText
                    className={classes.noMargin}
                    primary={user.cpf}
                  />
                </Box>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditButton("user")}
                  >
                    <img
                      src={editIcon}
                      alt="Edit"
                      className={classes.imgEditIcon}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem className={classes.addressListItem}>
                <Box className={classes.listBox}>
                  <ListItemText
                    primary={
                      user.hasAddress ? (
                        <Typography className={classes.addressText}>
                          Endereço cadastrado
                        </Typography>
                      ) : (
                        <Typography className={classes.addressText}>
                          Nenhum endereço cadastrado
                        </Typography>
                      )
                    }
                  />
                  <ListItemText primary={user.hasAddress && user.address} />
                </Box>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditButton("address")}
                  >
                    <img
                      src={editIcon}
                      alt="Edit"
                      className={classes.imgEditIcon}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} className={classes.ordersOutterGrid}>
            <Box className={classes.withBorderBottom}>
              <Typography className={classes.historyText}>
                Histório de pedidos
              </Typography>
            </Box>

            <Grid container className={classes.ordersInnerGrid}>
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
                      className={classes.orderGridItem}
                    >
                      <Paper className={classes.withPadding}>
                        <Typography className={classes.restaurantText}>
                          {order.restaurantName}
                        </Typography>
                        <Typography className={classes.dateText}>
                          {date}
                        </Typography>
                        <Typography className={classes.totalPriceText}>
                          SUBTOTAL R${order.totalPrice.toFixed(2)}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })
              ) : loading ? (
                <Grid item xs={12} className={classes.orderGridItem}>
                  <Typography inline="true" align="center">
                    Buscando...
                  </Typography>
                </Grid>
              ) : (
                <Grid item xs={12} className={classes.orderGridItem}>
                  <Typography inline="true" align="center">
                    Você não realizou nenhum pedido
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default OrdersPage;
