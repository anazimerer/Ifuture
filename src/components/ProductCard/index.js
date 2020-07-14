import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

import { Product, Img, Name, Qtd, Description, Button, Price } from "./styles";

const ProductCard = (props) => {
  const { product } = props;
  const cartContext = useContext(CartContext);

  const handleButtonClick = () => {
    quantity
      ? cartContext.dispatch({
          type: "REMOVE_ITEM_FROM_CART",
          productId: product.id,
        })
      : cartContext.dispatch({ type: "ADD_ITEM_TO_CART", product: product });
  };

  let quantity = 0;
  const productInCart = cartContext.cart.find((item) => item.id === product.id);
  productInCart && (quantity = productInCart.quantity);

  return (
    <Product>
      <Img src={product.photoUrl} alt={product.name} />
      <Name>{product.name}</Name>
      <Qtd inCart={quantity}>{quantity}</Qtd>
      <Price>{`R$${product.price.toFixed(2)}`}</Price>
      <Description>{product.description}</Description>
      <Button inCart={quantity} onClick={handleButtonClick}>
        {quantity ? "remover" : "adicionar"}
      </Button>
    </Product>
  );
};

export default ProductCard;
