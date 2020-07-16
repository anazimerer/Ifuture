import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { AppHeader, Wrapper, BackButton, Title } from "./styles";
import { SearchIcon } from './styles'

const Header = (props) => {
  const { title, back } = props;
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/address") {
      history.push("/orders");
    } else {
      history.goBack();
    }
  };

  return (
    <AppHeader>
      <Wrapper>
        {back ? <BackButton onClick={handleClick} /> : <div />}
        <Title>{title}</Title>
      </Wrapper>
    </AppHeader>
  );
};

export default Header;
