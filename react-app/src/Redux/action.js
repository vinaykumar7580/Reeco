import { data } from "../Components/data"
import * as types from "./actionTypes"

const getProducts=(payload)=>{
    return{
        type:types.GET_PRODUCTS,
        payload
    }
    

}



export const GetProduct=(dispatch)=>{
    dispatch(getProducts(data))

}



