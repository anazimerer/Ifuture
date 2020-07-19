import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../../contexts/StoreContext";

import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Menu from "./menu";
import { getRestaurants } from "../../functions/axios";
import { Search } from "../SearchPage/styles";
import { AddressError, Loading } from "./styles";

import { makeStyles } from "@material-ui/core/styles";

import {
  CardActionArea,
  CardContent,
  Typography,
  OutlinedInput,
  CardMedia,
  Container,
  Card,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    alignContent: "center",
    maxWidth: "345",
    border: "1px solid #b8b8b8",
    marginBottom: "2vh",
    boxShadow: "none",
    borderRadius: "10px",
    height: "11.75rem",
  },

  title: {
    fontSize: "1rem",
    color: "#e8222e",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "-0.39px",
  },

  description: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },

  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },

  content: {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-between",
    color: "#b8b8b8",
    marginTop: "-2rem",
  },

  input: {
    paddingLeft: "5vh",
    marginTop: "10vh",
    marginBottom: "4%",
    width: "100%",
    letterSpacing: "-0.39px",
  },
});

const FeedPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState();
  const title = "Ifuture";
  const [categoryFilter, setCategoryFilter] = useState();
  const storeContext = useContext(StoreContext);

  const getTheRestaurants = () => {
    (async () => {
      const response = await getRestaurants();
      setRestaurants(response);
    })();
  };

  useEffect(() => {
    getTheRestaurants();
  }, [setRestaurants]);

  const addressError = (
    <Container maxWidth="xs" data-testid="container">
      <Header back title={"Não há endereço cadastrado"} />
      <AddressError onClick={() => history.push("/address")}>
        Cadastrar endereço
      </AddressError>
      <Footer />
    </Container>
  );

  const body = restaurants && !restaurants.message && (
    <Container style={{ height: "100vh" }} maxWidth="xs">
      <div
        style={{
          marginBottom: storeContext.state.activeOrder ? "11rem" : "4rem",
        }}
      >
        <Header title={title} />
        <Search />
        <OutlinedInput
          className={classes.input}
          color="secondary"
          type="text"
          name="searchInput"
          placeholder="Restaurante"
          pattern=""
          title="Esse campo só aceita letras"
          onFocus={() => {
            history.push("/search");
          }}
        />
        <Menu
          restaurants={restaurants}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        {restaurants
          .filter((item) => {
            if (!categoryFilter) {
              return true;
            } else {
              return item.category === categoryFilter;
            }
          })
          .map((rest) => {
            return (
              <Card key={rest.id} className={classes.root}>
                <CardActionArea
                  onClick={() => {
                    history.push(`/restaurants/${rest.id}`);
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={rest.name}
                    height="110"
                    image={rest.logoUrl}
                    title={rest.name}
                  />
                  <CardContent>
                    <Typography className={classes.title}>
                      {rest.name}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.content}>
                    <Typography component="span">
                      {" "}
                      {rest.deliveryTime - 10} - {rest.deliveryTime + 10} min{" "}
                    </Typography>
                    <Typography component="span">
                      Frete R${rest.shipping},00{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </div>
    </Container>
  );

  return restaurants ? (
    restaurants.message ? (
      <div>{addressError}</div>
    ) : (
      <div>{body}</div>
    )
  ) : (
    <Loading>
      <CircularProgress style={{ color: "red" }} />
    </Loading>
  );
};

export default FeedPage;
