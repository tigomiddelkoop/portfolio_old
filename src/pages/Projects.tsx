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
                                <div className={"m-2 py-2 px-2 bg-gray-900 shadow rounded-lg"}>
                                    <Link to={`/projects/${data.key}`}>
                                        <h1 className="text-2xl font-bold">{data.title}</h1>
                                        <p className={"font-light"}>{data.short_description}</p>
                                    </Link>
                                    <div className="flex">
                                        <a className={`mr-1 relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}
                                           href={data.url}>
                                            Website</a>
                                        <a className={`relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}
                                           href={data.source_control.github}>
                                            Github</a>
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