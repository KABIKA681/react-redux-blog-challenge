/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from '../../constants/actionTypes/products/fetchProduct';

export default (state, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_START:
      return {
        ...state,
        productList: {
          ...state.productList,
          loading: true,
          error: null,
          data: null,
        },
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: {
          ...state.productList,
          ...payload,
          loading: false,
        },
      };
    case FETCH_PRODUCT_FAIL:
      return {
        ...state,
        productList: {
          ...state.productList,
          error: null,
          loading: false,
        },
      };
    default:
      return null;
  }
};
