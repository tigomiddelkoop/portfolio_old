import React from "react";
import projectsJson from "./../config/projects.json"
import {Link} from "react-router-dom";
import * as _ from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export default class Projects extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount(): void {

    }

    render() {

        const id = parseInt(_.get(this.props, "match.params.id"));

        const project = _.find(projectsJson, data => {
            return data.key === id;
        });
        if (project === undefined) return (<div>
            <div className="md:flex m-5">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl mb-2 md:text-5xl font-bold">Project Not Found</h1>
                    <Link className="bg-gray-900 text-5xl mr-1 font-light hover:bg-gray-600 px-4 py-2 rounded"
                          to={"/projects"}><FontAwesomeIcon className={"mr-1"} icon={faArrowLeft}/>Back</Link>
                </div>
            </div>
        </div>);
        console.log(project);

        return (
            <div>
                <div className="md:flex flex-row m-5">

                    <div className="text-center md:text-left">
                        <Link className="bg-gray-900 mr-1 font-light hover:bg-gray-600 px-4 py-2 rounded"
                              to={"/projects"}><FontAwesomeIcon className={"mr-1"} icon={faArrowLeft}/>Back</Link>
                        <h1 className="text-4xl mt-1 md:text-5xl font-bold">{project.title}</h1>
                        <h3 className="text-2xl mb-2 font-light">{project.short_description}</h3>
                        <div className={"flex"}>
                            {project.languages.map(text => {
                                return (
                                    <p key={text} className="bg-gray-900 mr-1 text-sm px-2 py-1 rounded">{text}</p>);
                            })}
                        </div>
                        <div className="flex flex-wrap">
                        <p>{project.long_description}</p>
                    </div>
                    </div>
                </div>

            </div>
        )
    };
};