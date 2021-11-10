/* eslint-disable import/no-anonymous-default-export */
import initialState from "../../initialState";
import fetchProduct from "./fetchProduct";

export default (state = initialState, action = {}) => ({
  ...state,
  ...fetchProduct(state, action)
})