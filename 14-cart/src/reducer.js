const reducer = (state, action) => {
  if (action.type === 'UPDATE_CART') {
    const newCart = action.payload;
    return {
      ...state,
      cart: newCart,
    };
  }
  throw new Error('no action with that name!');
};

export default reducer;
