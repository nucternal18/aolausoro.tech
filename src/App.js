import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from '../src/pages/Home-page';
import About from '../src/pages/about';
import Portfolio from '../src/pages/portfolio';
import ContactForm from '../src/pages/contactForm';
import './assets/main.css';




const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={ContactForm} />
            </Switch>

        </Router>
    )
};


export default App;