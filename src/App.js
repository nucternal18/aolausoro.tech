import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/error-boundary";
import Spinner from "./components/Spinner";
import Home from "./pages/Home-page";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import ContactForm from "./pages/contactForm";
import "./style.css";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={ContactForm} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
