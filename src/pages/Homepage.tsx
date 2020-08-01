import Tigo from "../img/profilepicture.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React, {Fragment} from "react";
import {faCloud, faServer} from "@fortawesome/free-solid-svg-icons";
import Projects from "../components/Projects";
import ProgrammingLanguages from "../components/ProgrammingLanguages";

export default class Homepage extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="md:flex">
                    <img className="shadow border-2 h-64 w-64 mx-auto md:mx-0 md:mr-6 rounded-full"
                         alt="" src={Tigo}/>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-light">Tigo Middelkoop</h1>
                        <h3 className="text-2xl font-light"><span>Junior</span> Backend Developer</h3>
                        <h4 className="text-sm font-light">Current languages: PHP & JavaScript/TypeScript</h4>
                        <h4 className="text-xs font-light mb-6">Currently learning: C++, C, Objective-C, Java &
                            Rust</h4>
                        <div className="mb-4">
                            <a className="shadow bg-gray-900 border-r-2 border-gray-700 hover:bg-gray-600 px-4 py-2 rounded-l"
                               href="https://systemmanager.io"><FontAwesomeIcon icon={faServer}/> SystemManager Core</a>
                            <a className="shadow bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded-r"
                               href="https://systemmanager.cloud"><FontAwesomeIcon icon={faCloud}/> Cloud</a>
                        </div>
                        <div className={"mb-4"}>
                            <a className="shadow bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                               href="https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"><FontAwesomeIcon
                                icon={faLinkedin}/> LinkedIn</a>
                            <a className="shadow bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded mr-1"
                               href="https://github.com/tigomiddelkoop"><FontAwesomeIcon icon={faGithub}/> GitHub</a>
                            {/*<a className="shadow bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded mr-1"*/}
                            {/*   href="https://git.genericdevelopment.nl/__Tigo__"><FontAwesomeIcon*/}
                            {/*    icon={faGitlab}/> GitLab</a>*/}

                        </div>
                    </div>
                </div>
                <div>
                    <ProgrammingLanguages/>
                </div>
                <div>
                    <Projects/>
                </div>
            </Fragment>
        )
    }
}