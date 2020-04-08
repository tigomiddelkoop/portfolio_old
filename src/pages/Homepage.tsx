import Tigo from "../img/profilepicture.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGitlab, faLinkedin, faWordpressSimple} from "@fortawesome/free-brands-svg-icons";
import React, { Fragment } from "react";

export default class Homepage extends React.Component {

    render() {
        return (
        <Fragment>
            <div className="md:flex m-5">
                <img className="md:h-64 border-2 md:w-64 h-32 w-32 mx-auto md:mx-0 md:mr-6 rounded-full" alt=""
                     src={Tigo}/>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Tigo Middelkoop</h1>
                    <h3 className="text-2xl font-light">Junior Backend Developer</h3>
                    <h4 className="text-xs font-light mb-4">PHP, JavaScript (incl TypeScript), C++, C, Objective-C,
                        Java & Rust</h4>
                    <div className="mb-4">
                        <a className="bg-gray-900 border-r-2 border-gray-700 hover:bg-gray-600 px-4 py-2 rounded-l"
                           href="https://systemmanager.io">SystemManager Core</a>
                        <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded-r"
                           href="https://systemmanager.cloud">Cloud</a>
                    </div>
                    <div>
                        <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                           href="https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"><FontAwesomeIcon
                            icon={faLinkedin}/></a>
                        <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                           href="https://blog.genericdevelopment.nl"><FontAwesomeIcon icon={faWordpressSimple}/></a>
                        <a className="bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded mr-1"
                           href="https://github.com/tigomiddelkoop"><FontAwesomeIcon icon={faGithub}/></a>
                        <a className="bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded"
                           href="https://git.genericdevelopment.nl/__Tigo__"><FontAwesomeIcon icon={faGitlab}/></a>
                    </div>
                </div>
            </div>
            {/*<div className="text-center justify-center">*/}
            {/*    <h3 className="text-sm font-light">I'm not really a designer or a frontend developer</h3>*/}
            {/*    <h3 className="text-sm font-light">My portfolio might be lacking in some areas regarding its*/}
            {/*        design.</h3>*/}
            {/*    <h3 className="text-sm font-light">I am trying to make it a darkmode based portfolio</h3>*/}
            {/*</div>*/}
        </Fragment>
        )
    }
}