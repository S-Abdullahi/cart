import {
  CLEAR_CART,
  REMOVE_CART,
  ADD_ITEM,
  SUBTRACT_ITEM,
  TOTAL,
  CART_ITEMS,
  LOADING,
  DISPLAY_CART,
} from "./actions";

function removeItem(id, state) {
  const newData = state.items.filter((item) => item.id !== id);
  return newData;
}

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, items: [] };
  }

  if (action.type === REMOVE_CART) {
    const newData = removeItem(action.payload.id, state);
    return { ...state, items: newData };
  }

  if (action.type === ADD_ITEM) {
    const newArray = state.items.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, items: newArray };
  }

  if (action.type === SUBTRACT_ITEM) {
    const newSubtractArray = state.items
      .map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    return { ...state, items: newSubtractArray };
  }

  if (action.type === CART_ITEMS) {
    const cartItems = state.items.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    return { ...state, cartNumber: cartItems };
  }

  if (action.type === TOTAL) {
    const sumTotal = state.items
      .map((item) => item.amount * item.price)
      .reduce((acc, item) => acc + item, 0);
    return { ...state, total: sumTotal };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_CART) {
    return { ...state, items: action.payload, loading: false };
  }

  throw new Error("error occured");
};

export default reducer;
