import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginModal from './loginComponents/loginModal';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={LoginModal}/>
                <Footer />
            </BrowserRouter>
        </div>
        );
    }

    componentDidMount() {
        this.props.fetchUser();
    }
    
}

export default connect(null, actions)(App);