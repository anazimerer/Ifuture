import React, { useContext, useState } from "react";
import StoreContext from "../../contexts/StoreContext";

import {
  Product,
  Img,
  Name,
  Qtd,
  Description,
  Button,
  Price,
  ModalBody,
  ModalButton,
  ModalSelect,
  SelectWrapper,
  ModalTitle,
} from "./styles";

import Modal from "@material-ui/core/Modal";

const ProductCard = (props) => {
  const { product, restaurantInfo } = props;
  const storeContext = useContext(StoreContext);
  const [modal, setModal] = useState(false);
  const [quantitySelect, setQuantity] = useState(1);

  const findQuantity = () => {
    const productInCart = storeContext.state.cart.find(
      (item) => item.id === product.id
    );
    return productInCart ? productInCart.quantity : 0;
  };
  const quantityInCart = product.quantity || findQuantity();

  // Vou refatorar esta funcao
  const addProductToCart = () => {
    // Carrinho vazio
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
      // Produto da mesma loja dos que estao no carrinho
    } else if (storeContext.state.restaurantInfo.id === restaurantInfo.id) {
      storeContext.dispatch({
        type: "ADD_ITEM_TO_CART",
        product: product,
        quantity: quantitySelect,
      });
      // Ja possui produtos de loja diferente no carrinho
    } else {
      if (
        window.confirm(
          "Voce ja possui produtos no carrinho, deseja limpar e adicionar este produto ?"
        )
      ) {
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
      }
    }
    setModal(false);
  };

  const handleAddButton = () => {
    if (!quantityInCart) {
      setModal(true);
    } else {
      storeContext.dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        productId: product.id,
      });
    }
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleSelectChange = (event) => {
    setQuantity(event.target.value);
  };

  const modalBody = (
    <ModalBody>
      <ModalTitle>Selecione a quantidade desejada</ModalTitle>
      <SelectWrapper>
        <ModalSelect onChange={handleSelectChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </ModalSelect>
      </SelectWrapper>
      <ModalButton onClick={addProductToCart}>
        ADICIONAR AO CARRINHO
      </ModalButton>
    </ModalBody>
  );

  return (
    <div>
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
      <Modal open={modal} onClose={handleModalClose}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default ProductCard;
