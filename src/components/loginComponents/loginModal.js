import React, { Component } from 'react'
import LoginButton from './loginButton';

export default class LoginModal extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Project Toffee</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <div className="container">
                        <LoginButton option={"Google"}/>
                        <LoginButton option={"Facebook"}/>
                        <LoginButton option={"Github"}/>
                        <LoginButton option={"LinkedIn"}/>
                    </div>
                </p>
            </div>
            
        );
    }
}