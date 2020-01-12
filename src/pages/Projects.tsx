import React from "react";
import projectsJson from "./../config/projects.json"
import {render} from "react-dom";

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
        const projects = Array.from(projectsJson);

        return (
            <div className={"m-5"}>
                <div className="md:flex mb-5">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
                        <h3 className="text-2xl font-light">All the projects I have ever done</h3>
                    </div>
                    <hr/>
                </div>
                <div className="flex flex-wrap">

                    {projects.map((data: any) => {
                        return (
                            <div className="m-1 p-1 rounded bg-gray-900  xl:w-3/12 lg:w-4/12  md:6/12 w-full">
                                <div className="m-1">
                                    <h1 className="text-2xl font-bold">{data.title}</h1>
                                    <p className={"font-light"}>{data.short_description}</p>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        )
    }
}