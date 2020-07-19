import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";

export const AppFooter = styled(AppBar)`
  height: 3rem;
  background-color: #fafafa;
  color: black;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  top: auto;
  bottom: 0;
  position: fixed;
  display: ${({ open }) => (open ? "inherit" : "none")};
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
