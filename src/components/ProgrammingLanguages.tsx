import React from "react";
import programmingLanguagesJson from "./../config/programmingLanguages.json"
import Moment from "moment";
import {faJava, faJsSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class ProgrammingLanguages extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount(): void {

    }


    render() {

        const programmingLanguages = Array.from(programmingLanguagesJson);

        return (
            <div>
                <div className="md:flex m-5">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">The programming languages I can code in</h1>
                        <h3 className="text-xs md:text-xs font-light">These are the languages I am learning or know in
                            some case, you can see how comfortable I am coding with it on the confidence percentage</h3>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {programmingLanguages.map(data => {
                        let now = Moment();
                        let then = Moment([data.year]);
                        let {confidence}: any = data;


                        let languageName: any = data.language;

                        if (languageName instanceof Array) {
                            let firstLanguage: boolean = true

                            languageName = languageName.map((data => {
                                let first = firstLanguage;
                                firstLanguage = false;
                                return (<div>
                                    <p className={`${!first ? "text-xs" : ""}`}>{data}</p>
                                </div>)
                            }))

                        }

                        if (confidence >= 0 && confidence < 10) confidence = "None at all";
                        else if (confidence >= 10 && confidence < 25) confidence = "A bit, will need lots of StackOverflow";
                        else if (confidence >= 25 && confidence < 50) confidence = "I need StackOverflow sometimes";
                        else if (confidence >= 50 && confidence < 75) confidence = "I can comfortably code stuff in it without having to use StackOverflow constantly";
                        else if (confidence >= 75 && confidence < 99) confidence = "I am quite skilled in the language";
                        else if (confidence == 100) confidence = "I know the ins and outs of this language in detail";


                        return (<div key={languageName} className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                            <div className={"m-2 py-2 px-2 bg-gray-900 shadow rounded-lg"}>
                                <div className="text-xl text-center flex">
                                    <div className={"w-32 self-center border-r-2 border-gray-800 justify-center"}>
                                        <h1 className={"font-light mr-2"}>{languageName}</h1>
                                    </div>
                                    <div className={"flex flex-1 font-light text-xs flex-col ml-2"}>
                                        <div className={"self-center w-full text-center border-b-2 border-gray-800"}>
                                            <p className={"text-xl"}>Since <span
                                                className={"font-bold"}>{then.format("MMMM YYYY")}</span></p>
                                            <p className={"mb-2"}>That was {now.to(then)}!</p>
                                        </div>
                                        <div className={""}>
                                            <p className={"mt-2 text-md"}>Confidence level:</p>
                                            <p className={""}>{confidence}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        )
    };
};