import React, { useState, useEffect } from "react";
import { getRestaurants } from "../../functions/axios";
import { useHistory } from "react-router-dom";
import useInputValue from "../../hooks/useInput";

import Header from "../Header/index";

import { Search, TextPage } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  OutlinedInput,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Card,
} from "@material-ui/core";

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

  input: {
    paddingLeft: "5vh",
    marginTop: "10vh",
    marginBottom: "4%",
    width: "100%",
    letterSpacing: "-0.39px",
  },
});

const SearchPage = () => {
  const history = useHistory();
  const classes = useStyles();

  const [searchInput, handleChangeSearchInput] = useInputValue("");
  const [listOfRestaurants, setListOfRestaurants] = useState();

  useEffect(() => {
    (async () => {
      const response = await getRestaurants();
      setListOfRestaurants(response);
    })();
  }, []);

  let filteredRestaurants = listOfRestaurants || [];
  let restaurantsFound = "Busque por restaurante";

  if (listOfRestaurants && !listOfRestaurants.message) {
    if (searchInput !== "") {
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        return restaurant.name
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
    }

    if (
      filteredRestaurants !== undefined &&
      filteredRestaurants !== "" &&
      filteredRestaurants !== null
    ) {
      restaurantsFound = filteredRestaurants.map((rest) => {
        return (
          <Card
            key={rest.id}
            className={classes.root}
            onClick={() => history.push(`/restaurants/${rest.id}`)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={rest.name}
                height="140"
                image={rest.logoUrl}
                title={rest.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {rest.name}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography style={{ color: "#b8b8b8" }} variant="body2">
                    {rest.deliveryTime - 10} - {rest.deliveryTime + 10} min
                  </Typography>
                  <Typography style={{ color: "#b8b8b8" }} variant="body2">
                    Frete R${rest.shipping.toFixed(2)}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      });
    }
  }

  return (
    <Container style={{ height: "100vh" }} maxWidth="xs">
      <Header title={"Busca"} back={"true"} />
      <div>
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
          onChange={handleChangeSearchInput}
        />
        {searchInput.length > 0 ? (
          restaurantsFound.length > 0 &&
          !(typeof restaurantsFound === "string") ? (
            restaurantsFound
          ) : (
            <TextPage>Não encontramos :(</TextPage>
          )
        ) : (
          <TextPage>Busque por nome de restaurante</TextPage>
        )}
      </div>
    </Container>
  );
};

export default SearchPage;
