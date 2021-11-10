/* eslint-disable import/no-anonymous-default-export */
export default error => {
    if (error.response) {
      return error.response.data;
    }
    return {
      message: 'Please check your internet connection',
      error: 'Please check your internet connection',
    };
  };
  