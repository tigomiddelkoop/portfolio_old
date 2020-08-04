import React from "react";
import programmingLanguagesJson from "./../config/programmingLanguages.json"
import Moment from "moment";

export default class ProgrammingLanguages extends React.Component {
    
    state = {
        languages: Array.from(programmingLanguagesJson),
    }

    componentDidMount(): void {

    }


    render() {

        return (
            <div>
                <div className="md:flex">
                    <div className={"text-center md:text-left"}>
                        <h1 className="text-2xl md:text-5xl font-bold">The programming languages I know</h1>
                        <h3 className="text-xs md:text-xl font-light">These programming languages are onces I can code
                            in, or those who I am currently learning</h3>
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap">
                    {this.state.languages.map(data => {
                            let now = Moment();
                            let then = Moment([data.year]);
                            let {confidence}: any = data;

                            let languageName: any = data.language;

                            if (languageName instanceof Array) {
                                let firstLanguage: boolean = true

                                languageName = languageName.map((data => {
                                    let first = firstLanguage;
                                    firstLanguage = false;
                                    return (<div key={data}>
                                        <p className={`${!first ? "text-xs font-light" : ""}`}>{data}</p>
                                    </div>)
                                }))

                            }


                            // A bit of sarcasm to show what I am capable of right?
                            // if (confidence >= 0 && confidence < 10) confidence = "None at all";
                            // else if (confidence >= 10 && confidence < 25) confidence = "A bit, will need lots of StackOverflow";
                            // else if (confidence >= 25 && confidence < 50) confidence = "I need StackOverflow sometimes";
                            // else if (confidence >= 50 && confidence < 75) confidence = "I can comfortably code stuff in it without having to use StackOverflow constantly";
                            // else if (confidence >= 75 && confidence < 99) confidence = "I am quite skilled in the language";
                            // else if (confidence == 100) confidence = "I know the ins and outs of this language in detail";

                            if (confidence >= 0 && confidence < 10) confidence = `None (${confidence}%)`;
                            else if (confidence >= 10 && confidence < 25) confidence = `A bit (${confidence}%)`;
                            else if (confidence >= 25 && confidence < 50) confidence = `Getting Comfy (${confidence}%)`;
                            else if (confidence >= 50 && confidence < 75) confidence = `Quite comfortable (${confidence}%)`;
                            else if (confidence >= 75 && confidence < 99) confidence = `Getting skilled (${confidence}%)`;
                            else if (confidence === 100) confidence = `(${confidence}%)`;

                            return (
                                <div key={languageName} className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                                    <div className={"m-1 py-2 px-2 bg-gray-900 shadow rounded-lg"}>
                                        <div className="text-xl text-center flex">
                                            <div className={"w-32 self-center border-r-2 border-gray-800 justify-center"}>
                                                <h1 className={"font-bold mr-2"}>{languageName}</h1>
                                            </div>
                                            <div className={"flex flex-1 font-light text-xs flex-col ml-2"}>
                                                <div
                                                    className={"self-center w-full text-center border-b-2 border-gray-800"}>
                                                    <p className={"text-xl"}>Since <span
                                                        className={"font-bold"}>{then.format("MMMM YYYY")}</span></p>
                                                    <p className={"mb-2"}>That was {now.to(then)}!</p>
                                                </div>
                                                <div className={""}>
                                                    <p className={"mt-2 text-md"}>Confidence level: {confidence}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    };
};