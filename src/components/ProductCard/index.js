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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ProductCard = (props) => {
  const { product } = props;
  const cartContext = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const [quantitySelect, setQuantity] = useState(1);

  let quantity = 0;
  const productInCart = cartContext.cart.find((item) => item.id === product.id);
  productInCart && (quantity = productInCart.quantity);

  const addProductToCart = () => {
    if (quantity) {
      cartContext.dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        productId: product.id,
      });
    } else {
      cartContext.dispatch({
        type: "ADD_ITEM_TO_CART",
        product: product,
        quantity: 1,
      });
    }
  };

  const handleAddButton = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const modalBody = (
    <ModalBody>
      <h4>Selecione a quantidade desejada</h4>
      <ModalSelect>
        <option style={{}} value={1}>
          1
        </option>
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
      <ModalButton>ADICIONAR AO CARRINHO</ModalButton>
    </ModalBody>
  );

  return (
    <div>
      <Product>
        <Img src={product.photoUrl} alt={`Imagem de ${product.name}`} />
        <Name>{product.name}</Name>
        <Qtd inCart={quantity}>{quantity}</Qtd>
        <Price>{`R$${product.price.toFixed(2)}`}</Price>
        <Description>{product.description}</Description>
        <Button inCart={quantity} onClick={handleAddButton}>
          {quantity ? "remover" : "adicionar"}
        </Button>
      </Product>
      <Modal open={modal} onClose={handleModalClose}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default ProductCard;
