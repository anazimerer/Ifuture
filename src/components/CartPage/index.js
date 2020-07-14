import React, { useState } from "react";
import { Button, Checkbox } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CartCard from "../CartCard";
import { ContainerCart, CartList, SubTotal, useStyles } from "./styled";

const CartPage = () => {
  const classes = useStyles();

  const [cart, setCart] = useState({});

  return (
    <ContainerCart>
      <CartList>
        <ListItemText primary="Endereço" />
        <Divider />
      </CartList>
      <div>
        <h3>Carrinho</h3>

        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <div>
        <div>frete R$10,00</div>
      </div>
      <SubTotal>SUBTOTAL R$0,00</SubTotal>
      <div>Forma de pagamento</div>
      <Divider />
      <div>
        <Checkbox onChange={""} /> Dinhero
        <Checkbox onChange={""} /> Cartão de crédito
      </div>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Confirmar</Button>
    </ContainerCart>
  );
};

export default CartPage;
