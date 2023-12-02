import * as types from "./actionTypes";

const initialState = {
  product: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      }
    
    default:
      return state;
  }
};

export default reducer;
