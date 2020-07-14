import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";

export const AppFooter = styled(AppBar)`
  height: 3rem;
  background-color: #fafafa;
  backdrop-filter: blur(10px);
  color: black;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  top: auto;
  bottom: 0;
  position: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Svg = styled.svg`
  fill: ${({ active }) => (active ? "#E8222E" : "#B8B8B8")};
`;
