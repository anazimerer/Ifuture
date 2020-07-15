import React from "react";

import { useParams } from "react-router-dom";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  Restaurant,
  Img,
  Name,
  Category,
  Delivery,
  Shipping,
  Address,
  Loading,
} from "./styles";

import ProductCard from "../ProductCard";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurant] = useRestaurantDetail(restaurantId);

  return restaurant ? (
    <Container maxWidth="xs">
      <Restaurant>
        <Img src={restaurant.logoUrl} />
        <Name>{restaurant.name}</Name>
        <Category>{restaurant.category}</Category>
        <Delivery>
          {restaurant.deliveryTime - 10}
          {" - "}
          {restaurant.deliveryTime + 10}
          {" min"}
        </Delivery>
        <Shipping>Frete R${restaurant.shipping.toFixed(2)}</Shipping>
        <Address>{restaurant.address}</Address>
      </Restaurant>
      {restaurant.products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Container>
  ) : (
    <Loading>
      <CircularProgress style={{ color: "red" }} />
    </Loading>
  );
};

export default RestaurantPage;
