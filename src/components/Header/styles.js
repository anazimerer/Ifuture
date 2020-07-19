import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const AppHeader = styled(AppBar)`
  height: 2.75rem;
  background-color: #fafafa;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  color: black;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-areas: "back title ...";
  align-items: center;
  height: 100%;
`;

export const BackButton = styled(ArrowBackIosIcon)`
  color: black;
  grid-area: back;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
`;
