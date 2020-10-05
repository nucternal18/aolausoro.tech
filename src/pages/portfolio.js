/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import useFirestore from "../hooks/useFirestore";
import PortfolioAdmin from "./portfolio-admin";

// context
import { AuthContext } from "../context/authContext";

// firebase
import { auth, createUserProfileDocument } from "../firebase/config";

const Portfolio = () => {
  const { docs } = useFirestore("projects");
  const authContext = useContext(AuthContext);

  const { isAuthenticated, setIsAuthenticated } = authContext;

  const authCookie = (e) => {
    const authToken = Cookies.get("auth-token");
    if (authToken) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    authCookie();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapShot) => {
          setUserData({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      authContext.setUserData(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="container mx-auto flex-grow mb-4">
        {isAuthenticated && <PortfolioAdmin />}
        <h1 className="font-bold text-black text-2xl text-center my-4">
          PORTFOLIO
        </h1>

        <h2 className="text-center">Some of my projects</h2>

        <div className="flex justify-between flex-wrap my-4 px-4 sm:px-0">
          {docs &&
            docs.map((doc) => (
              <div
                key={doc.id}
                className="md:max-w-sm w-full rounded overflow-hidden shadow-lg my-4"
              >
                <img src={doc.url} alt="project" />
                <div className="flex flex-row justify-between px-6 py-4">
                  <a href="https://github-finder200719.netlify.app">
                    <p className="font-bold text-xl my-2">
                      <span className="code">&lt;</span>
                      {doc.projectName}
                      <span className="code">&#47;&gt;</span>
                    </p>
                  </a>
                  <a href={doc.github}>
                    <i className="fab fa-github font-bold text-xl my-2" />
                  </a>
                </div>
              </div>
            ))}
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
    </>
  );
};

export default Portfolio;
