const reducer = (state, action) => {
  if (action.type === 'UPDATE_CART') {
    const newCart = action.payload;
    return {
      ...state,
      cart: newCart,
      quantity: newCart.reduce((acc, el) => {
        return acc + el.amount;
      }, 0),
    };
  }
  throw new Error('no action with that name!');
};

export default reducer;
