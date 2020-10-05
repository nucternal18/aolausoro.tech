import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { projectFirestore, timestamp } from "../firebase/config";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [github, setGithub] = useState("");

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = projectFirestore.collection("projects");

    await collectionRef.add({
      createdAt: timestamp(),
      url,
      projectName,
      github,
    });

    setProjectName("");
    setGithub("");
  };

  return (
    <form className="flex flex-col justify-center text-center mb-4" onSubmit={handleSubmit}>
      <label>
        <i className="fas fa-plus-circle text-4xl" />
        <input type="file" onChange={changeHandler} className="hidden" />
      </label>

      <div>
        {error && <div className="justify-center">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl} />}
      </div>

      <div className="mx-auto my-6 w-3/4 flex flex-col">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Project Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              github address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="mx-auto w-3/4">
            <button
              className="shadow bg-orange-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UploadForm;
