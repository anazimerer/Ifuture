import React from "react";

import { useParams } from "react-router-dom";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProductCard from "../ProductCard";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurant] = useRestaurantDetail(restaurantId);

  return restaurant ? (
    <Container maxWidth="xs">
      {restaurant.products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Container>
  ) : (
    <CircularProgress style={{ color: "red" }} />
  );
};

export default RestaurantPage;
