import React, { useEffect, useState, useContext } from "react";
import StoreContext from "../../contexts/StoreContext";

import { getActiveOrder } from "../../functions/axios";

import { useLocation } from "react-router-dom";

import useInterval from "@use-it/interval";

import {
  OrderAppBar,
  Wrapper,
  ClockWrapper,
  ClockIcon,
  ClockTimer,
  Restaurant,
  Label,
  Total,
} from "./styles";

const OrderBar = () => {
  const storeContext = useContext(StoreContext);
  const [timeLeft, setTimeLeft] = useState();
  const [delay, setDelay] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (
      (!storeContext.state.activeOrder &&
        location.pathname.includes("/restaurants")) ||
      location.pathname === "/orders" ||
      location.pathname === "/cart"
    ) {
      (async () => {
        const response = await getActiveOrder();
        storeContext.dispatch({
          type: "SET_ACTIVE_ORDER",
          activeOrder: response,
        });
      })();
    }
  }, [location]);

  useEffect(() => {
    if (storeContext.state.activeOrder) {
      setDelay(60000);
    } else {
      setDelay(null);
    }
  }, [storeContext.state.activeOrder]);

  useInterval(() => {
    if (storeContext.state.activeOrder) {
      const minutesToExpire =
        (storeContext.state.activeOrder.expiresAt - Date.now()) / 60000;
      if (minutesToExpire > 0) {
        setTimeLeft(minutesToExpire);
      } else {
        storeContext.dispatch({
          type: "CLEAR_ACTIVE_ORDER",
        });
      }
    }
  }, delay);

  const clock = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M17 9h-2v8.525L22 22l1-1.748-6-3.793V9zm-1 18C9.922 27 5 22.078 5 16S9.922 5 16 5s11 4.922 11 11-4.922 11-11 11zm-.014-25C8.258 2 2 8.272 2 16s6.258 14 13.986 14C23.728 30 30 23.728 30 16S23.728 2 15.986 2z"
      />
    </svg>
  );

  const havefooter =
    location.pathname === "/restaurants" ||
    location.pathname === "/cart" ||
    location.pathname === "/orders";

  const isOpen =
    location.pathname.includes("restaurants") ||
    location.pathname === "/cart" ||
    location.pathname === "/orders" ||
    location.pathname === "/search";

  const calculateTimeLeft = () => {
    if (storeContext.state.activeOrder) {
      return `${(
        (storeContext.state.activeOrder.expiresAt - Date.now()) /
        60000
      ).toFixed(0)}min`;
    }
  };

  return storeContext.state.activeOrder ? (
    <OrderAppBar havefooter={havefooter ? 1 : 0} open={isOpen}>
      <Wrapper>
        <ClockWrapper>
          <ClockIcon>{clock}</ClockIcon>
          <ClockTimer>{calculateTimeLeft()}</ClockTimer>
        </ClockWrapper>
        <Label>Pedido em andamento</Label>
        <Restaurant>{storeContext.state.activeOrder.restaurantName}</Restaurant>
        <Total>
          SUBTOTAL R${storeContext.state.activeOrder.totalPrice.toFixed(2)}
        </Total>
      </Wrapper>
    </OrderAppBar>
  ) : null;
};

export default OrderBar;
