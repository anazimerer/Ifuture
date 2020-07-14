import { useState, useEffect } from "react";

import { getRestaurantDetail } from "../functions/axios";

const useRestaurantDetail = (restaurantId) => {
  const [restaurant, setRestaurant] = useState();

  const requestRestaurantDetail = async () => {
    const response = await getRestaurantDetail(restaurantId);
    setRestaurant(response);
  };

  useEffect(() => {
    requestRestaurantDetail();
  }, [restaurantId]);

  return [restaurant];
};

export default useRestaurantDetail;
