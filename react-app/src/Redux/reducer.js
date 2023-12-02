import * as types from "./actionTypes";

const initialState = {
  product: [],
  productSingle:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      }
    case types.GET_SINGLE_PRODUCT:
      return{
        ...state,
        productSingle:action.payload
      }
    
    default:
      return state;
  }
};

export default reducer;
