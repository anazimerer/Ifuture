export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const newCart = [
        ...state.cart,
        { ...action.product, quantity: action.quantity },
      ];

      return { ...state, cart: newCart };
    case "REMOVE_ITEM_FROM_CART": {
      const newCart = state.cart.filter((product) => {
        return product.id !== action.productId;
      });

      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};
