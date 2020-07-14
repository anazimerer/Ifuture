import React, { useReducer } from "react";
import Router from "./routes";

import CartContext from "./contexts/CartContext";
import { cartReducer, initialState } from "./reducers/cart";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch: dispatch }}>
      <CssBaseline />
      <Router />
    </CartContext.Provider>
  );
};

export default App;
