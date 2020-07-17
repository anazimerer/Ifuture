import React, { useReducer } from "react";
import Router from "./routes";

import StoreContext from "./contexts/StoreContext";
import { storeReducer, initialState } from "./reducers/store";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <CssBaseline />
      <Router />
    </StoreContext.Provider>
  );
};

export default App;
