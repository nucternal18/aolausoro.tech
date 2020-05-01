import Header from '../src/components/Header';
import HomeContainer from '../src/components/HomeContainer';
import './assets/main.css';

const app = () => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('home-container').innerHTML = HomeContainer();
};

app();