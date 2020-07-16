import React, { useState, useContext, useEffect } from "react";

import { placeOrder } from "../../functions/axios";

import Divider from "@material-ui/core/Divider";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Button,
} from "@material-ui/core";
import { ContainerCart, CartList, SubTotal, Frete, useStyles } from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import StoreContext from "../../contexts/StoreContext";
import ProductCard from "../ProductCard";

const CartPage = () => {
  const classes = useStyles();
  let storeContext = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    if (storeContext.state.restaurantInfo) {
      localStorage.setItem("state", JSON.stringify(storeContext.state));
    }
  }, [storeContext.state]);

  const shipping = storeContext.state.restaurantInfo
    ? storeContext.state.restaurantInfo.shipping
    : 0;

  const user = JSON.parse(localStorage.getItem("labefood")).user;

  console.log(storeContext);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  let totalValue = 0;

  storeContext.state.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity + shipping;
  });

  function confirmOrder() {
    if (!paymentMethod) {
      alert("Preencha o método de pagamento");
      return;
    } else if (!storeContext.state.cart.length) {
      alert("Seu carrinho está vazio");
      return;
    }

    const restaurantId = storeContext.state.restaurantInfo.id;

    const body = {
      products: storeContext.state.cart,

      paymentMethod,
    };

    placeOrder(restaurantId, body);
  }

  return (
    <ContainerCart>
      <Header title="Meu carrinho" back />

      <CartList>
        <Typography>Endereço de entrega</Typography>
        <Typography> {user.hasAddress && user.address}</Typography>
        <Divider />
      </CartList>
      <CartList>
        {storeContext.state.restaurantInfo ? (
          <>
            {<Typography>{storeContext.state.restaurantInfo.name}</Typography>}
            <Typography>{storeContext.state.restaurantInfo.address}</Typography>
            <Typography>
              {storeContext.state.restaurantInfo.deliveryTime} min
            </Typography>
          </>
        ) : (
          <Typography>Carrinho vazio</Typography>
        )}
      </CartList>

      <div>
        {storeContext.state.cart.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <Frete>
        <Typography>Frete</Typography> <div>R${shipping.toFixed(2)}</div>
      </Frete>

      <SubTotal>
        <Typography>SUBTOTAL</Typography> <div>R${totalValue.toFixed(2)}</div>
      </SubTotal>
      <Typography>Forma de pagamento</Typography>
      <Divider />
      <FormControl>
        <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
          <FormControlLabel
            value={"money"}
            control={<Radio color="default" />}
            label="Dinheiro"
          />
          <FormControlLabel
            value={"creditcard"}
            control={<Radio color="default" />}
            label="Cartao"
          />
        </RadioGroup>
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={confirmOrder}
      >
        Confirmar
      </Button>
      <Footer />
    </ContainerCart>
  );
};

export default CartPage;
