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
      <button value={"/login"} onClick={handleClick}>
        login
      </button>
      <button value={"/signup"} onClick={handleClick}>
        signup
      </button>
      <button value={"/address"} onClick={handleClick}>
        address
      </button>
      <button value={"/restaurants"} onClick={handleClick}>
        restaurants
      </button>
      <button value={"/search"} onClick={handleClick}>
        search
      </button>
      <button value={"/cart"} onClick={handleClick}>
        cart
      </button>
      <button value={"/orders"} onClick={handleClick}>
        orders
      </button>
      <button value={"/profile"} onClick={handleClick}>
        profile
      </button>
    </div>
  );
};

export default SplashScreen;
