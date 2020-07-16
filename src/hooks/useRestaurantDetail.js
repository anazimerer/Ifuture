import { useState, useEffect } from "react";

import { getRestaurantDetail } from "../functions/axios";

const useRestaurantDetail = (restaurantId) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    (async () => {
      const response = await getRestaurantDetail(restaurantId);
      setRestaurant(response);
    })();
  }, [restaurantId]);

  return [restaurant];
};

export default useRestaurantDetail;
