import React from "react";

import { useParams } from "react-router-dom";

import useRestaurantDetail from "../../hooks/useRestaurantDetail";

import ProductCard from "../ProductCard";
import Header from "../Header";

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
  ProductCategory,
} from "./styles";

import OrderBar from "../OrderBar";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurant] = useRestaurantDetail(restaurantId);

  const restaurantInfo = restaurant && {
    id: restaurant.id,
    name: restaurant.name,
    address: restaurant.address,
    deliveryTime: restaurant.deliveryTime,
    shipping: restaurant.shipping,
  };

  // O bloco abaixo vai separar os produtos por categoria e renderiza-los
  let categories;
  let sortedProducts = [];
  let renderedProducts;
  if (restaurant) {
    // Extrai o nome das categorias, sem repeticao, ordenadas
    categories = new Set(
      restaurant.products.map((item) => item.category).sort()
    );
    // Para cada categoria ...
    categories.forEach((category) => {
      // Filtra os produtos correspondetes
      const filteredProducts = restaurant.products.filter(
        (product) => product.category === category
      );
      // Cria um objeto com o nome da categoria e o array de produtos filtrados
      const productsByCategory = {
        category: category,
        products: filteredProducts,
      };
      // Coloca esse objeto no array de produtos organizados
      sortedProducts.push(productsByCategory);
    });
    // Renderiza os produtos separados por categorias
    renderedProducts = sortedProducts.map((productsGroup) => (
      <div key={productsGroup.category}>
        <ProductCategory>{productsGroup.category}</ProductCategory>
        {productsGroup.products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            restaurantInfo={restaurantInfo}
          />
        ))}
      </div>
    ));
  }

  return restaurant ? (
    <Container maxWidth="xs">
      <Header back title={"Restaurante"} />
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
      {renderedProducts}
      <OrderBar />
    </Container>
  ) : (
    <Loading>
      <CircularProgress style={{ color: "red" }} />
    </Loading>
  );
};

export default RestaurantPage;
