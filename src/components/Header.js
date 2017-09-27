import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand" href="/">Project Toffee</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Pricing</a>
                    </li>
                </ul>
                <a href="/auth/github"><button className="btn btn-sm align-middle btn-outline-secondary" type="button" >Sign In</button></a>
            </div>
        </nav>
    );
}

export default Header;