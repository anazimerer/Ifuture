export const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("labefoodCart")) || [],
  restaurantInfo:
    JSON.parse(localStorage.getItem("labefoodrestaurantInfo")) || null,
  activeOrder: null,
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      const newCart = [
        ...state.cart,
        { ...action.product, quantity: action.quantity },
      ];
      localStorage.setItem("labefoodCart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }

    case "REMOVE_ITEM_FROM_CART": {
      const newCart = state.cart.filter((product) => {
        return product.id !== action.productId;
      });
      localStorage.setItem("labefoodCart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }

    case "CLEAR_CART": {
      localStorage.removeItem("labefoodCart");
      return { ...state, cart: [] };
    }

    case "ADD_RESTAURANT_INFO":
      localStorage.setItem(
        "labefoodrestaurantInfo",
        JSON.stringify(action.restaurantInfo)
      );
      return { ...state, restaurantInfo: action.restaurantInfo };

    case "REMOVE_RESTAURANT_INFO": {
      return { ...state, restaurantInfo: null };
    }

    case "SET_ACTIVE_ORDER": {
      return { ...state, activeOrder: action.activeOrder };
    }

    case "CLEAR_ACTIVE_ORDER": {
      return { ...state, activeOrder: null };
    }

    default:
      return state;
  }
};
