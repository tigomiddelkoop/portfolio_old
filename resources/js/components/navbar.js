import React from 'react';

import {Link} from "react-router-dom";

class GenericNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        GenericDevelopment
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/projects">Projects</Link>
                            <Link className="nav-link" to="/blog">Blog</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="true">
                                    Sourcecode <span className="caret"></span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="https://github.com/tigomiddelkoop">GitHub</a>
                                    <a className="dropdown-item"
                                       href="https://git.genericdevelopment.nl/explore/projects">Generic Git</a>
                                </div>
                            </li>


                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <a>Login</a>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default GenericNavbar;