import React from "react";
import projectsJson from "./../config/projects.json"
import {Link} from "react-router-dom";

export default class Projects extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {
            projects: []
        }
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
                <div className="md:flex m-5">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">What I have build</h1>
                        <h3 className="text-2xl font-light">All the software I have build and/or helped with.</h3>
                    </div>
                </div>
                <div className="flex flex-wrap">

                    {projects.map((data: any) => {
                            return (
                                <div key={data.key} className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                                    <div className={"m-2 shadow shadow-rounded"}>
                                        <Link to={`/projects/${data.key}`}>
                                            <div className="rounded-t p-2 bg-gray-900">
                                                {/*<img/>*/}
                                                <h1 className="text-2xl font-bold">{data.title}</h1>
                                                <p className={"font-light"}>{data.short_description}</p>
                                            </div>
                                        </Link>
                                        <div className="mt-0 flex min-w-full text-center">
                                            <a className={`${data.url === undefined ? "text-gray-700 cursor-not-allowed" : ""} bg-gray-800 font-light flex-1 border-b-2 border-l-2 border-gray-900 hover:bg-gray-600 px-4 py-2 rounded-bl`}
                                               href={data.url}>
                                                Website</a>
                                            <a className={`${data.source_control.github === undefined ? "text-gray-700 cursor-not-allowed" : ""} bg-gray-800 font-light flex-1 border-b-2 border-l border-r border-gray-900 hover:bg-gray-600 px-4 py-2`}
                                               href={data.source_control.github}>
                                                Github</a>
                                            <a className={`${data.source_control.gitlab === undefined ? "text-gray-700 cursor-not-allowed" : ""} bg-gray-800 font-light flex-1 border-b-2 border-r-2 border-gray-900 hover:bg-gray-600 px-4 py-2 rounded-br`}
                                               href={data.source_control.gitlab}>
                                                GitLab</a>
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