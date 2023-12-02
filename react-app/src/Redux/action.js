
import * as types from "./actionTypes"

export const getProducts=(payload)=>{
    return{
        type:types.GET_PRODUCTS,
        payload
    }
    

}

export const getSingleProducts=(payload)=>{
    return{
        type:types.GET_SINGLE_PRODUCT,
        payload
    }
}









