import React, { useContext, useState } from "react";
import StoreContext from "../../contexts/StoreContext";

import { Product, Img, Name, Qtd, Description, Button, Price } from "./styles";

import QuantityModal from "../QuantityModal";
import NewCartModal from "../NewCartModal";

const ProductCard = (props) => {
  const { product, restaurantInfo } = props;
  const storeContext = useContext(StoreContext);

  const [quantityModal, setQuantityModal] = useState(false);
  const [quantitySelect, setQuantity] = useState(1);

  const [newCartModal, setNewCartModal] = useState(false);

  const handleSelectChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleQuantityModalClose = () => {
    setQuantityModal(false);
  };

  const handleNewCartModalClose = () => {
    setNewCartModal(false);
  };

  const handleAddButton = () => {
    if (!quantityInCart) {
      setQuantityModal(true);
    } else {
      storeContext.dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        productId: product.id,
      });
    }
  };

  const addProductToCart = () => {
    // Carrinho vazio, adiciona dados da loja e produto
    if (!storeContext.state.cart.length) {
      storeContext.dispatch({
        type: "ADD_RESTAURANT_INFO",
        restaurantInfo: restaurantInfo,
      });
      storeContext.dispatch({
        type: "ADD_ITEM_TO_CART",
        product: product,
        quantity: quantitySelect,
      });
      setQuantityModal(false);
      // Produto da mesma loja dos que estao no carrinho
    } else if (storeContext.state.restaurantInfo.id === restaurantInfo.id) {
      storeContext.dispatch({
        type: "ADD_ITEM_TO_CART",
        product: product,
        quantity: quantitySelect,
      });
      setQuantityModal(false);
      // Ja possui produtos de loja diferente no carrinho
    } else {
      setQuantityModal(false);
      setNewCartModal(true);
    }
  };

  // Quando o produto e de loja diferente
  // limpa o carrinho, troca a loja e adiciona produto
  const newCartAddProduct = () => {
    storeContext.dispatch({
      type: "CLEAR_CART",
      restaurantInfo: restaurantInfo,
    });
    storeContext.dispatch({
      type: "ADD_RESTAURANT_INFO",
      restaurantInfo: restaurantInfo,
    });
    storeContext.dispatch({
      type: "ADD_ITEM_TO_CART",
      product: product,
      quantity: quantitySelect,
    });
    setNewCartModal(false);
  };

  const findQuantity = () => {
    const productInCart = storeContext.state.cart.find(
      (item) => item.id === product.id
    );
    return productInCart ? productInCart.quantity : 0;
  };
  const quantityInCart = product.quantity || findQuantity();

  return (
    <div data-testid="card">
      <Product>
        <Img src={product.photoUrl} alt={`Imagem de ${product.name}`} />
        <Name>{product.name}</Name>
        <Qtd inCart={quantityInCart}>{quantityInCart}</Qtd>
        <Price>{`R$${product.price.toFixed(2)}`}</Price>
        <Description>{product.description}</Description>
        <Button inCart={quantityInCart} onClick={handleAddButton}>
          {quantityInCart ? "remover" : "adicionar"}
        </Button>
      </Product>
      <QuantityModal
        open={quantityModal}
        onClose={handleQuantityModalClose}
        handleSelectChange={handleSelectChange}
        addProductToCart={addProductToCart}
      />
      <NewCartModal
        open={newCartModal}
        onClose={handleNewCartModalClose}
        newCartAddProduct={newCartAddProduct}
      />
    </div>
  );
};

export default ProductCard;
