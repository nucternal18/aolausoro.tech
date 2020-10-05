import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/error-boundary";
import Spinner from "./components/Spinner";
import Home from "./pages/Home-page";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact-page";
import Login from "./pages/Login";

import { AuthProvider } from "./context/authContext";

import "./style.css";

const App = () => {
  return (
    <AuthProvider>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default App;
