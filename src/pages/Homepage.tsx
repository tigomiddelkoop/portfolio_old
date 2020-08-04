import React, {Fragment} from "react";
import Projects from "../components/Projects";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import DesignerMessage from "../components/DesignerMessage";
import PersonalInfo from "../components/PersonalInfo";

export default class Homepage extends React.Component {

    render() {
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