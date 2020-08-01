import React, {Fragment} from 'react';
import Tigo from "../img/profilepicture.png";
import flyinghearts from "../img/flyinghearts.png";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faProjectDiagram} from "@fortawesome/free-solid-svg-icons/faProjectDiagram";

export default class Navbar extends React.Component {

    state = {
        collapsed: true
    };

    toggleNavbar() {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {

        return (
            <Fragment>
                <div className={"block md:flex shadow"}>
                    <div className="flex flex-1 bg-gray-900">
                        <div className="flex flex-1">
                            <Link to={"/"} className={"flex items-center px-3 hover:bg-gray-800"}>
                                <img className="border mr-2 h-8 w-8 rounded-full" alt="Tigo" src={Tigo}/>
                                <p className="font-semibold">Tigo Middelkoop</p>
                            </Link>
                        </div>
                        <div onClick={this.toggleNavbar.bind(this)}
                             className="md:hidden block py-3 px-4 hover:bg-gray-800">
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                    </div>
                    <div className={`bg-gray-900 md:flex ${this.state.collapsed ? "hidden" : "block"}`}>
                        <Link onClick={this.toggleNavbar.bind(this)} to="/"
                              className={`block items-center py-3 px-4 hover:bg-gray-800`}>
                            <FontAwesomeIcon className={"mr-1"} icon={faHome}/>Home</Link>
                        <Link onClick={this.toggleNavbar.bind(this)} to="/projects"
                              className={`block items-center py-3 px-4 hover:bg-gray-800`}>
                            <FontAwesomeIcon className={"mr-1"} icon={faProjectDiagram}/>Projects</Link>
                    </div>
                </div>
            </Fragment>
        );
    }
};
