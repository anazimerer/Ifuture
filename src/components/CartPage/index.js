import React, { useState, useContext } from "react";
import { Button, Radio, Typography } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {
  ContainerCart,
  CartList,
  SubTotal,
  Frete,
  useStyles,
  Payments,
} from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import StoreContext from "../../contexts/StoreContext";
import ProductCard from "../ProductCard";

const CartPage = () => {
  const classes = useStyles();
 
  const [payments, setPayment] = useState("");

  const storeContext = useContext(StoreContext);

  let totalValue = 0;

  storeContext.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity;
  });

  const handleRemoveItemFromCart = (productId) => {
    storeContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId });
  };

  const choosePaymentMethod = (event) => {
    setPayment(event.target.value);
  };

  return (
    <ContainerCart>
      <Header title="Meu carrinho" />
      <CartList>
        <ListItemText primary="Endereço" />
        <Divider />
      </CartList>
      <CartList>
        <Typography>Carrinho</Typography>
      </CartList>
      <div>
      {/*storeContext.state.cart.map((item)=>(
         <ProductCard key={item.id} product={item}/>
      ))*/}
      </div>

      <Frete>
        <Typography>Frete</Typography> <div>R$10,00</div>
      </Frete>

      <SubTotal>
        <Typography>SUBTOTAL</Typography> <div>R${totalValue.toFixed(2)}</div>
      </SubTotal>
      <Typography>Forma de pagamento</Typography>
      <Divider />
      <Payments>
        <Radio color="black" onChange={choosePaymentMethod} value="money" />{" "}
        <Typography>Dinheiro</Typography>
      </Payments>
      <Payments>
        <Radio
          color="black"
          onChange={choosePaymentMethod}
          value="creditcard"
        />{" "}
        <Typography>Cartão de crédito</Typography>
      </Payments>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Confirmar
      </Button>
      <Footer />
    </ContainerCart>
  );
};

export default CartPage;
