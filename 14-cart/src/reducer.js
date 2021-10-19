const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    const newLoading = action.payload;
    return {
      ...state,
      loading: newLoading,
    };
  }
  if (action.type === 'DISPLAY_CART') {
    const newCart = action.payload;
    return {
      ...state,
      loading: false,
      cart: newCart,
    };
  }

  /*SEPARATE INCREASE AND DECREASE*/
  if (action.type === 'INCREASE_ITEM') {
    const id = action.payload;
    const newCart = state.cart.map(el => {
      if (el.id === id) {
        return { ...el, amount: el.amount + 1 };
      }
      return el;
    });
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === 'DECREASE_ITEM') {
    const id = action.payload;
    const newCart = state.cart
      .map(el => {
        if (el.id === id) {
          return { ...el, amount: el.amount - 1 };
        }
        return el;
      })
      .filter(el => el.amount !== 0);
    return {
      ...state,
      cart: newCart,
    };
  }
  /*End INCREASE AND DECREASE SEPARATE*/

  /*TOGGLE INCREASE AND DECREASE*/
  if (action.type === 'TOGGLE_AMOUNT') {
    const id = action.payload.id;
    const type = action.payload.type;
    const newCart = state.cart
      .map(item => {
        if (item.id === id) {
          if (type === 'inc') {
            return { ...item, amount: item.amount + 1 };
          }
          if (type === 'dec') {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter(item => item.amount !== 0);
    return {
      ...state,
      cart: newCart,
    };
  }
  /*TOGGLE INCREASE AND DECREASE*/

  if (action.type === 'REMOVE_ITEM') {
    const id = action.payload;
    return {
      ...state,
      cart: state.cart.filter(el => el.id !== id),
    };
  }
  if (action.type === 'REMOVE_ITEMS') {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === 'GET_TOTAL') {
    let newTotal = state.cart.reduce((acc, item) => {
      const { price, amount } = item;
      const itemPrice = price * amount;
      acc += itemPrice;
      return acc;
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === 'GET_QUANTITY') {
    let newQuantity = state.cart.reduce((acc, item) => acc + item.amount, 0);
    return {
      ...state,
      quantity: newQuantity,
    };
  }
  throw new Error('no action with that name!');
};

export default reducer;
