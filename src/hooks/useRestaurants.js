import { useState, useEffect } from "react";

import { getRestaurants } from "../functions/axios";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState();

  const requestRestaurants = async () => {
    const response = await getRestaurants();
    setRestaurants(response);
  };

  useEffect(() => {
    requestRestaurants();
  }, []);

  return [restaurants];
};

export default useRestaurants;
