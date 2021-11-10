/* eslint-disable import/no-anonymous-default-export */
import * as apiActionTypes from '../redux/constants/apiAction';



export default ({
  httpOptions = {},
  url = '',
  method = 'GET',
  data = null,
  queries = null,
  resType = 'json',
  onStart = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_START,
      payload: { loading: true },
    }),
  onSuccess = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_SUCCESS,
      payload: { loading: false },
    }),
  onFailure = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_FAILURE,
      payload: { loading: false },
    }),
  onEnd = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_END,
      payload: { loading: false },
    }),
}) => {
  return {
    type: apiActionTypes.API_REQUEST,
    payload: {
      httpOptions,
      url,
      method,
      resType,
      data,
      queries,
      onStart,
      onSuccess,
      onFailure,
      onEnd,
    },
  };
};
