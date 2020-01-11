import React from 'react';
import Tigo from './img/photo.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGitlab, faWordpressSimple, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Navbar from "./components/Navbar";

export default class App extends React.Component {


    render() {

        return (
            <div>
                <Navbar/>
                <div className="md:flex m-5">
                    <img className="md:h-64 md:border-2 md:w-64 h-32 w-32 mx-auto md:mx-0 md:mr-6 rounded-full" alt=""
                         src={Tigo}/>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Tigo Middelkoop</h1>
                        <h3 className="text-2xl font-light">Junior Backend Developer</h3>
                        <h4 className="text-xs font-light mb-4">PHP, JavaScript (incl TypeScript), C++, C, Objective-C,
                            Java, Go</h4>
                        <div>
                            <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                               href="https://systemmanager.io">SystemManager</a>
                            <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                               href="https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"><FontAwesomeIcon
                                icon={faLinkedin}/></a>
                            <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                               href="https://blog.genericdevelopment.nl"><FontAwesomeIcon icon={faWordpressSimple}/></a>
                            <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                               href="https://github.com/tigomiddelkoop"><FontAwesomeIcon icon={faGithub}/></a>
                            <a className="bg-gray-900 mr-1 hover:bg-gray-600 px-4 py-2 rounded"
                               href="https://git.genericdevelopment.nl/__Tigo__"><FontAwesomeIcon icon={faGitlab}/></a>
                        </div>
                    </div>
                </div>
                <div className="text-center justify-center">
                    <h3 className="text-2xl">Im not really a designer or a frontend developer</h3>
                    <h3 className="text-2xl">My portfolio might be lacking in some areas regarding its design.</h3>
                </div>
            </div>
        );
    }
};
