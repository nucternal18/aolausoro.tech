import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return <div className='text-red-500 text-xs italic'>{errorMessage}</div>;
};

export default ErrorMessage;
