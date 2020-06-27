import React, {Fragment} from "react";
import hearts from "../img/hearts.png"
import flyinghearts from "../img/flyinghearts.png"

export default class Easteregg extends React.Component<any, any> {

    state = {
        eastertoggled: false,
    };

    toggleEaster = () => {
        this.setState({eastertoggled: !this.state.eastertoggled})
    }

    render() {


        return (
            <Fragment>
                <div className="flex m-5 text-center content-center justify-center">
                    <div className={"align-middle"}>
                        {!this.state.eastertoggled ?
                            <Fragment>
                                <h1 className="text-3xl md:text-5xl font-light">You found a secret</h1>
                                <button onClick={this.toggleEaster}
                                        className={"shadow bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded mr-1"}>Reveal
                                </button>
                            </Fragment>
                            :
                            <Fragment>
                                <h1 className="text-3xl md:text-6xl font-light">Demi <img className={"lg:w-24 w-12 inline"} src={hearts}/> 13th
                                    March 2020</h1>
                                <p className={"text-xs font-light"}>Yes, it is something personal.</p>
                                <p className={"text-xs font-light mb-12"}>This is one of my ways of showing infinite love.</p>
                            </Fragment>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}