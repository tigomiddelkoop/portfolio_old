import React, {Fragment} from "react";
import Projects from "../components/Projects";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import DesignerMessage from "../components/DesignerMessage";
import PersonalInfo from "../components/PersonalInfo";

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
                <div className="p-5">
                    <DesignerMessage/>
                    <div>
                        <PersonalInfo/>
                    </div>
                    <div>
                        <ProgrammingLanguages/>
                    </div>
                    <div>
                        <Projects/>
                    </div>
                </div>
            </Fragment>
        )
    }
}