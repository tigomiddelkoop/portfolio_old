import React, {Fragment} from "react";
import PersonalInfo from "../components/PersonalInfo";
import Card from "../components/card";
import CardTitle from "../components/cardtitle";
import CardBody from "../components/cardbody";

export default class Homepage extends React.Component {

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
                <div className={"p-5"}>

                    <div>
                        <PersonalInfo/>
                    </div>
                    <div className={"flex justify-center"}>
                        <div className={"dark w-full lg:w-6/12 xl:w-4/12 xl2:w-3/12"}>
                            <Card>
                                <CardTitle>Notice</CardTitle>
                                <CardBody>
                                    <div>
                                        <p className={"mb-4"}>My portfolio has moved to a new domain and has been updated to version 3</p>

                                        <div className={"flex justify-center"}>
                                            <a href={"https://tigo.tech"} className={"py-1 px-2 border bg-gray-800 border-gray-600 shadow-lg rounded-lg"}>tigo.tech</a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}