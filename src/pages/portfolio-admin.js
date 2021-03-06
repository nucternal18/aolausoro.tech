import React from "react";
import UploadForm from "../components/UploadForm";

const PortfolioAdmin = () => {
  return (
    <div className='sm:w-3/4 mx-2 sm:mx-auto rounded overflow-hidden shadow-lg my-4'>
      <h1 className='text-center text-5xl font-light mb-4'>Projects</h1>
      <p className='text-center mb-2'>Add latest projects</p>
      <UploadForm />
    </div>
  );
};

export default PortfolioAdmin;
