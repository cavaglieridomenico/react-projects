const reducer = (state, action) => {
  if (action.type === 'ADD_CART') {
    const newCart = action.payload;
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === 'INCREASE') {
    const id = action.payload;
    const newCart = action.payload;
    return {
      ...state,
      cart: newCart,
    };
  }
  throw new Error('no action with that name!');
};

export default reducer;
