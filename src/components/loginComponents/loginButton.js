import React, { Component } from 'react'

const LoginButton = (props) => {
    let iconClassName = `fa fa-lg fa-${props.option.toLowerCase()}`;
    let api= `/auth/${props.option.toLowerCase()}`;
    return (
        <div className="row justify-content-center">
            <a href={api}>
                <button type="button" className="btn btn-outline-dark login-button">
                    <i className={iconClassName} aria-hidden="true"></i>&nbsp;&nbsp;Sign in with {props.option}
                </button>
            </a>
        </div>
    );
}

export default LoginButton;