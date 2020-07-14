import React from "react";
import { useHistory } from "react-router-dom";
import { findByLabelText } from "@testing-library/react";

const SplashScreen = () => {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{ fontSize: "4rem" }}
        value={"/login"}
        onClick={handleClick}
      >
        login
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/signup"}
        onClick={handleClick}
      >
        signup
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/address"}
        onClick={handleClick}
      >
        address
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/restaurants"}
        onClick={handleClick}
      >
        restaurants
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/search"}
        onClick={handleClick}
      >
        search
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/cart"}
        onClick={handleClick}
      >
        cart
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/orders"}
        onClick={handleClick}
      >
        orders
      </button>
      <button
        style={{ fontSize: "4rem" }}
        value={"/profile"}
        onClick={handleClick}
      >
        profile
      </button>
    </div>
  );
};

export default SplashScreen;
