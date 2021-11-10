/* eslint-disable import/no-anonymous-default-export */
import { ActionTypes } from "../constants/actions-types";
import apiAction from '../../helpers/apiAction'
import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_START, FETCH_PRODUCT_FAIL  } from "../constants/actionTypes/products/fetchProduct";






// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

// export const selectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// }

export default () => dispatch => 
  dispatch(
    apiAction({
      method: 'get',
      url: '/products',
      onStart: () => dispatch =>
        dispatch({
          type: FETCH_PRODUCT_START 
        }),
      onSuccess: data => dispatch => {
        return dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: {
            data
          }
        })
      },
      onFailure: err => dispatch => {
        return dispatch({
          type: FETCH_PRODUCT_FAIL,
          payload: {
            err
          }
        })
      }
    })
  )






