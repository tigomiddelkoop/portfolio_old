import React, {Fragment} from "react";
import hearts from "../img/hearts.png"

export default class Easteregg extends React.Component<any, any> {

    state = {
        eastertoggled: false,
    };

    toggleEaster = () => {
        this.setState({eastertoggled: !this.state.eastertoggled})
    }

    render() {

        // {/*<div className="flex m-5 text-center content-center justify-center">*/}
        return (

            <div className="h-full w-full flex items-center text-center content-center bg-gray-800 justify-center">
                <div className="max-w-lg align-middle">
                    {!this.state.eastertoggled ?
                        <Fragment>
                            <div>
                                <h1 className="text-2xl md:text-5xl font-light">Oeeeh! An easteregg!</h1>
                                <h1 className="text-xl md:text-4xl font-light">Find out what is says!</h1>
                                <button onClick={this.toggleEaster}
                                        className={"shadow bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded mr-1"}>Reveal
                                </button>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <div className={""}>
                                <h1 className="text-6xl font-light">Demi</h1>
                                <img alt={"hearts"} className={"lg:w-32 w-12 inline"} src={hearts}/>

                                <h1 className="text-4xl md:text-6xl font-light">13th March 2020</h1>
                            </div>

                            <div className={"bg-gray-900 m-2 p-2 rounded shadow"}>
                                <p className={"text-md font-light"}>Yes, This is something that is highly
                                    personal</p>
                                <p className={"text-xs font-light"}>This is one of my ways of showing eternal
                                    love to the girl I love.</p>
                            </div>
                            <p></p>
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}