import React from "react";

import { useParams } from "react-router-dom";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurant] = useRestaurantDetail(restaurantId);

  return restaurant ? (
    <Container maxWidth="xs">oi</Container>
  ) : (
    <CircularProgress style={{ color: "red" }} />
  );
};

export default RestaurantPage;
