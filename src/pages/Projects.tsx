import React from "react";
import projectsJson from "./../config/projects.json"

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
                            <div className={"xl:w-3/12 m-2 lg:w-4/12 md:6/12 w-full"}>
                                <div className="rounded-t p-1 bg-gray-900 mb-1">
                                    <div className="m-1">
                                        {/*<img/>*/}
                                        <h1 className="text-2xl font-bold">{data.title}</h1>
                                        <p className={"font-light"}>{data.short_description}</p>
                                    </div>
                                </div>
                                <div className="min-w-full">
                                    <a className="bg-gray-800 mt-2 border-b-2 border-l-2 border-gray-900 hover:bg-gray-600 px-4 py-2 rounded-bl"
                                       href={data.url}>
                                        Website</a>
                                    <a className="bg-gray-800 mt-2 border-b-2 border-gray-900 hover:bg-gray-600 px-4 py-2 "
                                       href={data.source_control.github}>
                                        Github</a>
                                    <a className="bg-gray-800 mt-2 border-b-2 border-r-2 border-gray-900 hover:bg-gray-600 px-4 py-2 rounded-br"
                                       href={data.source_control.gitlab}>
                                        GitLab</a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}