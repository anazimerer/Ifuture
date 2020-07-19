import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";

export const OrderAppBar = styled(AppBar)`
  height: 7.375rem;
  background-color: #e8222e;
  backdrop-filter: blur(10px);
  top: auto;
  bottom: ${({ havefooter }) => (havefooter ? "3rem" : "0")};
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  position: fixed;
  display: ${({ open }) => (open ? "inherit" : "none")};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "clock label"
    "clock restaurant"
    "clock total";
`;

export const ClockWrapper = styled.div`
  grid-area: clock;
  display: flex;
  flex-direction: column;
`;

export const ClockTimer = styled.div`
  text-align: center;
`;

export const ClockIcon = styled.div`
  text-align: center;
  margin-top: 2.75rem;
`;

export const Label = styled.div`
  grid-area: label;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #ffffff;
  margin-top: 1.5rem;
`;

export const Restaurant = styled.div`
  grid-area: restaurant;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  margin-top: 0.5rem;
`;

export const Total = styled.div`
  grid-area: total;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`;
