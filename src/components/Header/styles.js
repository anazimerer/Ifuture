import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const AppHeader = styled(AppBar)`
  height: 2.75rem;
  background-color: #fafafa;
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  color: black;
`;

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas: "back title empty";
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;

export const BackButton = styled(ArrowBackIosIcon)`
  color: black;
  grid-area: back;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  grid-area: title;
  justify-content: center;
  margin-right: 3rem;
  font-size: 1rem;
  margin-top: 0.5rem;
`;
