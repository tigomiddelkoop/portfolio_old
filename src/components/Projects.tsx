import React from "react";
import {Link} from "react-router-dom";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Loading from "./Loading";


export default class Projects extends React.Component {

    state = {
        projects: [],
    }

    /**
     *
     * Runs when the component gets mounted
     * In this case we use it to load the data that we are going to display on the site.
     * This should make it easier for me to add new content without to much hastle
     *
     * @return {void} Returns nothing
     *
     */
    componentDidMount(): void {

        fetch(process.env.PUBLIC_URL + "/data/projects.json", {
            method: "GET"
        }).then(response => response.json().then(data => this.setState({projects: data})));

    }

    /**
     *
     * Opens a popover with more information about the project.
     * @TODO We need to figure out how we do this in the JSON files, Either we make a small program that combines them all or we make a webserver that serves those when it gets requested by the site itself.
     *
     * @return {void} - Returns nothing, read above why
     *
     */

    openProject(id: bigint): void {
        console.log(id);

        return;
    }


    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {
        return (
            <div>
                <div className="md:flex">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">My projects</h1>
                        <h3 className="text-xs md:text-xl font-light">All the projects I am working on</h3>
                    </div>
                </div>

                <div className="mt-2 flex flex-wrap">

                    {this.state.projects.length === 0 ? <Loading/> : this.state.projects.map((data: any) => {
                            return (
                                <div key={data.key} className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                                        <div className={"flex flex-col flex-1"}>
                                            <div className={"flex"}>
                                                <Link to={`/projects/${data.key}`}
                                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">{data.title}</Link>
                                                <div className="flex">
                                                    {data.url !== undefined ?
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
                                                    {data.source_control.github !== undefined ?
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


    /**
     *
     * Renders the projects
     *
     * @deprecated Deprecated, not in use right now
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    renderProjects(): JSX.Element {
        return (<div></div>)
    }
};