export const initialState = {
  products: [],
  cart: [],
  restaurantInfo: null,
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
      return { ...state, cart: newCart };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "ADD_RESTAURANT_INFO":
      return { ...state, restaurantInfo: action.restaurantInfo };

    case "REMOVE_RESTAURANT_INFO": {
      return { ...state, restaurantInfo: null };
    }

    default:
      return state;
  }
};
