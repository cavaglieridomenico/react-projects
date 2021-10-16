const reducer = (state, action) => {
  if (action.type === 'UPDATE_CART') {
    const newCart = action.payload;
    return {
      ...state,
      cart: newCart,
      quantity: newCart.reduce((acc, el) => {
        return acc + el.amount;
      }, 0),
      total: newCart.reduce((acc, el) => {
        const sum = acc + parseFloat(el.price) * el.amount;
        const fixedSum = sum.toFixed(2);
        return parseFloat(fixedSum);
      }, 0),
    };
  }
  if (action.type === 'REMOVE_ITEMS') {
    return {
      ...state,
      cart: [],
      quantity: 0,
    };
  }
  throw new Error('no action with that name!');
};

export default reducer;
