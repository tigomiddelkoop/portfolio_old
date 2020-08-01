import React from "react";
import projectsJson from "../config/projects.json"
import {Link} from "react-router-dom";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faGitlab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class Projects extends React.Component {
    state = {}

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {

    }

    openProject(id: bigint) {
        console.log(id);

        return;
    }

    render() {
        const projects = Array.from(projectsJson);

        return (
            <div>
                <div className="md:flex">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">My projects</h1>
                        <h3 className="text-xs md:text-xl font-light">All the projects I am working on</h3>
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap">

                    {projects.map((data: any) => {
                            return (
                                <div key={data.key} className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                                        <div className={"flex flex-col flex-1"}>
                                            <div className={"flex"}>
                                                <Link to={`/projects/${data.key}`}
                                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">{data.title}</Link>
                                                <div className="flex">
                                                    {data.url != undefined ?
                                                        <a
                                                            className={`flex p-4 border-b-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}
                                                            href={data.url}>
                                                            <FontAwesomeIcon icon={faGlobe}/>
                                                        </a> :
                                                        ""
                                                    }
                                                    {/* The GenericDevelopment GitLab instance is offline. */}
                                                    {/*{data.source_control.gitlab != undefined ?*/}
                                                    {/*    <a*/}
                                                    {/*        className={`flex p-4 border-b-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}*/}
                                                    {/*        href={data.source_control.gitlab}>*/}
                                                    {/*        <FontAwesomeIcon icon={faGitlab}/>*/}
                                                    {/*    </a> :*/}
                                                    {/*    ""*/}
                                                    {/*}*/}
                                                    {data.source_control.github != undefined ?
                                                        <a
                                                            className={`flex p-4 border-b-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}
                                                            href={data.source_control.github}>
                                                            <FontAwesomeIcon icon={faGithub}/>
                                                        </a> :
                                                        ""
                                                    }
                                                </div>
                                            </div>
                                            <p className={"p-2 font-light"}>{data.short_description}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                        },
                    )}
                </div>
            </div>
        )
    };
};