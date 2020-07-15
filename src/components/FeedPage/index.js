import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { getRestaurants } from '../../functions/axios';

import Header from "../Header";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";

import {
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Button,
  AppBar,
  Card,
} from "@material-ui/core";

import { TitleBarContainer, Title } from "./styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
});

const FeedPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const key = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };

  const getRestaurants = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants",
        key
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  console.log(restaurants);

  return (
    <>
      <TitleBarContainer>
        <Title>Ifuture</Title>
      </TitleBarContainer>
      <Container maxWidth="md">
        {restaurants.map((rest) => {
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {rest.shipping} min
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}

        <Footer />
      </Container>
    </>
  );
};

export default FeedPage;
