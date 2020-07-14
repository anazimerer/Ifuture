import React from "react";
import { useHistory } from "react-router-dom";

import { AppHeader, Wrapper, BackButton, Title } from "./styles";

const Header = (props) => {
  const { title, back } = props;
  const history = useHistory();

  return (
    <AppHeader>
      <Wrapper>
        {back ? <BackButton onClick={() => history.back()} /> : <div />}
        <Title>{title}</Title>
      </Wrapper>
    </AppHeader>
  );
};

export default Header;
