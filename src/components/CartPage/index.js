import React, { useState, useContext } from "react";
import ListItemText from "@material-ui/core/ListItemText";
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
  const storeContext = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("creditcard");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  let totalValue = 0;

  storeContext.state.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity;
  });

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
        {storeContext.state.cart.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <Frete>
        <Typography>Frete</Typography> <div>R$10,00</div>
      </Frete>

      <SubTotal>
        <Typography>SUBTOTAL</Typography> <div>R${totalValue.toFixed(2)}</div>
      </SubTotal>
      <Typography>Forma de pagamento</Typography>
      <Divider />
      <FormControl>
        <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
          <FormControlLabel
            value={"cash"}
            control={<Radio />}
            label="Dinheiro"
          />
          <FormControlLabel
            value={"creditcard"}
            control={<Radio />}
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
      >
        Confirmar
      </Button>
      <Footer />
    </ContainerCart>
  );
};

export default CartPage;
