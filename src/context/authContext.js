import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

// Google auth
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [userData, setUserData] = useState(null);

  // Login
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      Cookies.set("auth-token", "vrnsp-auth-success", { expires: 7 });
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      console.error(error.message);
    }
  };

  // Logout
  const logout = async () => {
    auth.signOut();
    localStorage.removeItem("auth-token");
    Cookies.remove("auth-token");
    setIsAuthenticated(false);
    setLoading(false);
    setToken(null);
  };
  // Clear Errors
  const clearErrors = () => setIsError(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loading,
        isError,
        user: userData,
        login,
        setIsAuthenticated,
        setUserData,
        setIsError,
        logout,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
