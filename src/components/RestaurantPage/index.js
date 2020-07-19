import React, { useContext } from "react";
import StoreContext from "../../contexts/StoreContext";

import { useParams, useHistory } from "react-router-dom";

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
  AddressError,
} from "./styles";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const history = useHistory();
  const [restaurant] = useRestaurantDetail(restaurantId);
  const storeContext = useContext(StoreContext);

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
  if (restaurant && !restaurant.message) {
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

  const body = restaurant && !restaurant.message && (
    <Container maxWidth="xs" data-testid="container">
      <Header back title={"Restaurante"} />
      <div
        style={{
          marginBottom: storeContext.state.activeOrder ? "8rem" : "1rem",
        }}
      >
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
      </div>
    </Container>
  );

  const addressError = (
    <Container maxWidth="xs" data-testid="container">
      <Header back title={"Não há endereço cadastrado"} />
      <AddressError onClick={() => history.push("/address")}>
        Cadastrar endereço
      </AddressError>
    </Container>
  );

  return restaurant ? (
    restaurant.message ? (
      <div>{addressError}</div>
    ) : (
      <div>{body}</div>
    )
  ) : (
    <Loading data-testid="loading">
      <CircularProgress style={{ color: "red" }} />
    </Loading>
  );
};

export default RestaurantPage;
