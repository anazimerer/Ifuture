import React, { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";

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
} from "./styles";

import Modal from "@material-ui/core/Modal";

const ProductCard = (props) => {
  const { product } = props;
  const cartContext = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const [quantitySelect, setQuantity] = useState(1);

  let quantityInCart = 0;
  const productInCart = cartContext.cart.find((item) => item.id === product.id);
  productInCart && (quantityInCart = productInCart.quantity);

  const addProductToCart = () => {
    cartContext.dispatch({
      type: "ADD_ITEM_TO_CART",
      product: product,
      quantity: quantitySelect,
    });

    setModal(false);
  };

  const handleAddButton = () => {
    if (!quantityInCart) {
      setModal(true);
    } else {
      cartContext.dispatch({
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
      <h4>Selecione a quantidade desejada</h4>
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
