import { useState } from 'react';

const useInitialState = () => {
  const initialState = {
    cart: [],
  };
  const [state, setState] = useState(initialState);
  //payload -> product
  const addToCart = (payload) =>{
    setState({
        ...state,
        cart: state.cart.includes(payload)
        ? state.cart//lo que está actualmen te en el array + el new product
        : [...state.cart, payload]
    });
};

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((product, index) => index !== indexValue),
    });
  };
  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
