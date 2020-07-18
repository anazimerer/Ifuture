import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Menu from "./menu";
import { getRestaurants } from "../../functions/axios";
import useInputValue from "../../hooks/useInput";
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
  const [searchInput, handleChangeSearchInput] = useInputValue("");
  const title = "Ifuture";

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
      <Header back title={"Usuário não possui endereço cadastrado"} />
      <AddressError onClick={() => history.push("/address")}>
        Cadastrar endereço
      </AddressError>
    </Container>
  );

  const body = restaurants && !restaurants.message && (
    <Container style={{ height: "100vh" }} maxWidth="xs">
      <Header title={title} />
      <Search />
      <OutlinedInput
        className={classes.input}
        color="secondary"
        type="text"
        name="searchInput"
        value={searchInput}
        placeholder="Restaurante"
        pattern=""
        title="Esse campo só aceita letras"
        onFocus={() => {
          history.push("/search");
        }}
      />
      <Menu restaurants={restaurants} />
      {restaurants.map((rest) => {
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
                height="140"
                image={rest.logoUrl}
                title={rest.name}
              />
              <CardContent>
                <Typography className={classes.title}>{rest.name}</Typography>
              </CardContent>
              <CardContent className={classes.content}>
                <Typography component="span">
                  {" "}
                  {rest.deliveryTime} min{" "}
                </Typography>
                <Typography component="span">
                  Frete R${rest.shipping},00{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
      <Footer />
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
