import React, {Fragment} from "react";
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

    // render() {
    //
    //     const id = parseInt(_.get(this.props, "match.params.id"));
    //
    //     const project = _.find(projectsJson, data => {
    //         return data.key === id;
    //     });
    //     if (project === undefined) return (<div>
    //         <div className="md:flex m-5">
    //             <div className="text-center md:text-left">
    //                 <h1 className="text-4xl mb-2 md:text-5xl font-bold">Project Not Found</h1>
    //                 <Link className="bg-gray-900 text-5xl mr-1 font-light hover:bg-gray-600 px-4 py-2 rounded"
    //                       to={"/projects"}><FontAwesomeIcon className={"mr-1"} icon={faArrowLeft}/>Back</Link>
    //             </div>
    //         </div>
    //     </div>);
    //     console.log(project);
    //
    //     return (
    //         <Fragment>
    //             <div className={"m-5 flex flex-wrap"}>
    //                 <div className="w-full md:w-9/12">
    //
    //                     <div className="text-center mb-1 md:text-left">
    //                         <Link className="bg-gray-900 mr-1 font-light hover:bg-gray-600 px-4 py-2 rounded"
    //                               to={"/projects"}><FontAwesomeIcon className={"mr-1"} icon={faArrowLeft}/>Back</Link>
    //                         <h1 className="text-4xl mt-1 md:text-5xl font-bold">{project.title}</h1>
    //                         <h3 className="text-2xl mb-2">{project.short_description}</h3>
    //                         <hr className={"w-full md:w-9/12"}/>
    //                     </div>
    //                     <div className="text-center md:text-left">
    //                         <div>
    //                             {project.long_description.map(text => {
    //                                 return (
    //                                     <div className={"mt-2"} key={text.key}>
    //                                         <h2 className="text-2xl">{text.header}</h2>
    //                                         <h2 className="">{text.body}</h2>
    //                                     </div>);
    //                             })}
    //                         </div>
    //                     </div>
    //                 </div>
    //
    //                 <div className={"w-full lg:w-3/12 mt-6 text-center md:mt-0"}>
    //                     <div className={"mb-8"}>
    //                         <h3 className={"text-xl mb-1"}>Pictures</h3>
    //                         <p className={"text-sm mb-1"}>Not implemented, soon to be implemented.</p>
    //                     </div>
    //                     <div>
    //                         <h3 className={"text-xl mb-1"}>Languages it's build in</h3>
    //                         <div className={"flex justify-center flex-column flex-wrap"}>
    //                             {project.languages.map(language => {
    //                                 return (
    //                                     <p key={language}
    //                                        className="bg-gray-900 mr-1 mb-1 text-sm px-2 py-1 rounded">{language}</p>);
    //                             })}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Fragment>
    //     )
    // };
};