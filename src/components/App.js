import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginModal from './loginComponents/loginModal';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
    return (
        <div>
            <Header />
            <LoginModal/>
            <Footer />
        </div>
    );
}

export default App;