import React from "react";
import { useHistory } from "react-router-dom";
import { Four, P } from "./styles";

const FourOFour = () => {
  const history = useHistory();
  history.replace("/404");
  return (
    <Four>
      <P>404</P>
      <P>¯\_(ツ)_/¯</P>
    </Four>
  );
};

export default FourOFour;
