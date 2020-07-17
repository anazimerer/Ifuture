import React, { useState, useContext } from "react";
import Divider from "@material-ui/core/Divider";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Button,
} from "@material-ui/core";
import {
  ContainerCart,
  AddressUser,
  SubTotal,
  Frete,
  useStyles,
  Payments,
  AddressRest,
  ProductsList,
} from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import StoreContext from "../../contexts/StoreContext";
import ProductCard from "../ProductCard";

import { placeOrder } from "../../functions/axios";

const CartPage = () => {
  const classes = useStyles();
  const storeContext = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const user = JSON.parse(localStorage.getItem("labefood")).user;

  const shipping = storeContext.state.restaurantInfo
    ? storeContext.state.restaurantInfo.shipping
    : 0;

  let totalValue = storeContext.state.restaurantInfo
    ? storeContext.state.restaurantInfo.shipping
    : 0;

  storeContext.state.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity;
  });

  const handlePlaceOrder = async () => {

  if (!paymentMethod) {
    alert("Preencha o método de pagamento");
    return;
  } else if (!storeContext.state.cart.length) {
    alert("Seu carrinho está vazio");
    return;
  }
    const products = storeContext.state.cart.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });

    const order = { paymentMethod, products };

    const activeOrder = await placeOrder(
      storeContext.state.restaurantInfo.id,
      order
    );

    if (activeOrder) {
      storeContext.dispatch({
        type: "SET_ACTIVE_ORDER",
        activeOrder: activeOrder,
      });
      storeContext.dispatch({
        type: "CLEAR_CART",
      });
    }

  };



  return (
    <>
     <Header title="Meu carrinho" back />
     <AddressUser>
        <Typography className="gray" >Endereço de entrega</Typography>
        <Typography> {user.hasAddress && user.address}</Typography>
        <Divider />
      </AddressUser>
    <ContainerCart>
      <AddressRest>
        {storeContext.state.restaurantInfo ? (
          <>
            {<Typography className="red">{storeContext.state.restaurantInfo.name}</Typography>}
            <Typography className="gray">{storeContext.state.restaurantInfo.address}</Typography>
            <Typography className="gray">
              {storeContext.state.restaurantInfo.deliveryTime} min
            </Typography>
          </>
        ) : (
          <Typography className="center">Carrinho vazio</Typography>
        )}
      </AddressRest>
      <ProductsList>
        {storeContext.state.cart.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ProductsList>

      <Frete>
        
        <Typography>Frete</Typography>
          {storeContext.state.restaurantInfo
            ? <>R$ {shipping.toFixed(2)}</>
            : "0.00"}
      
      </Frete>

      <SubTotal>
        <Typography>SUBTOTAL</Typography> 
        <Typography color="secondary">
          <strong>R${totalValue.toFixed(2)}</strong>
          </Typography>
      </SubTotal>
      <Payments>
      <Typography>Forma de pagamento</Typography>
      <Divider />
      <FormControl>
        <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
          <FormControlLabel
            value={"money"}
            control={<Radio color="default"/>}
            label="Dinheiro"
          />
          <FormControlLabel
            value={"creditcard"}
            control={<Radio color="default"/>}
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
        onClick={handlePlaceOrder}
      >
        Confirmar
      </Button>
      </Payments>
    </ContainerCart>
    <Footer />
    </>
  );
};

export default CartPage;
