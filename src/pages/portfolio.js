/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Portfolio = () => {
  return (
    <div className="container mx-auto flex-grow mb-4">
      <h1 className="font-bold text-black text-2xl text-center my-4">
        PORTFOLIO
      </h1>

      <section className="mx-auto">
        <h2 className="text-center">Some of my projects</h2>

        <div className="flex justify-between flex-wrap my-4 px-4 sm:px-0">
          <div className="md:max-w-sm w-full rounded overflow-hidden shadow-lg my-4">
            <iframe
              className="w-full h-56"
              src="https://github-finder200719.netlify.app"
              alt="project"
            />
            <div className="flex flex-row justify-between px-6 py-4">
              <a href="https://github-finder200719.netlify.app">
                <p className="font-bold text-xl my-2">
                  <span className="code">&lt;</span>
                  GitHub Finder
                  <span className="code">&#47;&gt;</span>
                </p>
              </a>
              <a href="https://github.com/nucternal18/github-finder">
                <i className="fab fa-github font-bold text-xl my-2" />
              </a>
            </div>
          </div>
          <div className="md:max-w-sm w-full rounded overflow-hidden shadow-lg my-4">
            <iframe
              className="w-full h-56"
              src="https://hidden-brushlands-92854.herokuapp.com/login"
              alt="project"
            />
            <div className="flex flex-row justify-between px-6 py-4">
              <a href="https://hidden-brushlands-92854.herokuapp.com/login">
                <p className="font-bold text-xl my-2">
                  <span className="code">&lt;</span>
                  Contact Keeper
                  <span className="code">&#47;&gt;</span>
                </p>
              </a>
              <a href="https://github.com/nucternal18/contact-keeper">
                <i className="fab fa-github font-bold text-xl my-2" />
              </a>
            </div>
          </div>
          <div className="md:max-w-sm w-full rounded overflow-hidden shadow-lg my-4">
            <iframe
              className="w-full h-56"
              src="https://norbl-clothing.herokuapp.com/"
              alt="project"
            />
            <div className="flex flex-row justify-between px-6 py-4">
              <a href="https://norbl-clothing.herokuapp.com/">
                <p className="font-bold text-xl my-2">
                  <span className="">&lt;</span>
                  norbl clothing
                  <span className="">&#47;&gt;</span>
                </p>
              </a>
              <a href="https://github.com/nucternal18/norbl-clothing">
                <i className="fab fa-github font-bold text-xl my-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://github.com/nucternal18?tab=repositories"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Checkout my github page
            <i className="fas fa-chevron-right mx-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
