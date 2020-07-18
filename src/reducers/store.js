export const initialState = {
  cart: [],
  restaurantInfo: null,
  activeOrder: null,
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      const newCart = [
        ...state.cart,
        { ...action.product, quantity: action.quantity },
      ];
      return { ...state, cart: newCart };
    }

    case "REMOVE_ITEM_FROM_CART": {
      const newCart = state.cart.filter((product) => {
        return product.id !== action.productId;
      });
      if (newCart.length) {
        return { ...state, cart: newCart };
      } else {
        return { ...state, cart: [], restaurantInfo: null };
      }
    }

    case "CLEAR_CART": {
      return { ...state, cart: [], restaurantInfo: null };
    }

    case "ADD_RESTAURANT_INFO":
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
