import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class Notfound extends React.Component<any, any> {

    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {
        return (
            <Fragment>
                <div className="flex m-5 text-center content-center justify-center">
                    <div className={"h-full"}>

                        <h1 className="text-3xl md:text-5xl font-light">404</h1>
                        <p className="font-light">Seems like this page has vanished</p>
                        <p className="font-light mb-2">Click the button below to travel to the homepage</p>
                        <Link className={"shadow bg-gray-900 border-gray-700 hover:bg-gray-600 px-4 py-2 rounded"}
                              to={"/"}><FontAwesomeIcon icon={faHome}/> Home</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}