import React from 'react';
import Tigo from "../img/photo.jpg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

export default class Navbar extends React.Component {

    state = {
        collapsed: true
    };

    toggleNavbar() {
        alert("This functionality is not available yet! Shame on me.");
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {

        return (
            <div className="items-center flex bg-gray-900">
                <Link to="/" className="flex items-center mr-auto p-4 hover:bg-gray-800">
                    <img className="border-2 mr-2 h-8 w-8 rounded-full" alt="" src={Tigo}/>
                    <p className="font-light">Tigo Middelkoop</p>
                </Link>
                <div className="md:hidden block p-5 hover:bg-gray-800">
                    <FontAwesomeIcon icon={faBars} onClick={this.toggleNavbar.bind(this)}/>
                </div>
                <Link to="projects"
                      className="md:block hidden md:flex items-center md:py-5 md:px-4 hover:bg-gray-800">
                    Projects</Link>
                <div className="md:hidden hidden md:flex items-center md:py-5 md:px-4 hover:bg-gray-800">
                    <h1>Test</h1>
                </div>
                <div className="md:hidden hidden md:flex items-center md:py-5 md:px-4 hover:bg-gray-800">
                    <h1>Test</h1>
                </div>
            </div>
        );
    }
};
