import React, {Fragment} from "react";
import hearts from "../img/hearts.png"
import Moment from "moment";
// let momentDurationFormatSetup = require("moment-duration-format");
export default class Easteregg extends React.Component<any, any> {
    dates = {
        dateOfRelation: Moment("2020-03-13"),
    }

    state = {

        now: Moment(),
        eastertoggled: false,
        counter: this.calculateRelationLength(),
    };

    toggleEaster = () => {
        this.setState({eastertoggled: !this.state.eastertoggled})
    }

    calculateRelationLength() {

        const length = Moment().diff(this.dates.dateOfRelation);
        let duration = Moment.duration(length);

        let string = ""
        const years = duration.years()
        const months = duration.months()
        const days = duration.days()
        const hours = duration.hours()
        const minutes = duration.minutes()
        const seconds = duration.seconds()


        if (years == 1) {
            string += `${years} Year,`
        } else {
            string += `${years} Years,`
        }

        if (months == 1) {
            string += ` ${months} Month,`
        } else {
            string += ` ${months} Months,`
        }

        if (days == 1) {
            string += ` ${days} Day,`
        } else {
            string += ` ${days} Days,`
        }

        if (hours == 1) {
            string += ` ${hours} Hour,`
        } else {
            string += ` ${hours} Hours,`
        }


        if (minutes == 1) {
            string += ` ${minutes} Minute and`
        } else {
            string += ` ${minutes} Minutes and`
        }

        if (seconds == 1) {
            string += ` ${seconds} Second`
        } else {
            string += ` ${seconds} Seconds`
        }

        return string
    }

    componentDidMount() {
        setInterval(() => {
            const result = this.calculateRelationLength()
            console.log(result);

            this.setState({counter: result})
        }, 1000)
    }

    render() {


        return (

            <div className="min-h-screen flex items-center text-center content-center justify-center">
                <div className="align-middle">
                    {!this.state.eastertoggled ?
                        <Fragment>
                            <div>
                                <h1 className="text-5xl md:text-5xl font-light">EasterEgg!</h1>
                                <h1 className="text-md md:text-md font-light">Click Reveal to see what it is!</h1>
                                <button onClick={this.toggleEaster}
                                        className={"shadow bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded mt-2"}>Reveal
                                </button>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <div className={""}>
                                <h1 className="text-6xl font-light">Demi</h1>
                                <img alt={"hearts"} className={"lg:w-32 w-12 inline"} src={hearts}/>

                                <h1 className="text-4xl md:text-6xl font-light">{this.dates.dateOfRelation.format("MMMM DD[th] YYYY")}</h1>
                                <h1 className="text-xs md:text-lg font-light">{this.state.counter}</h1>
                            </div>

                            <div className={"bg-gray-900 m-2 p-2 rounded shadow"}>
                                <p className={"text-md font-light"}>Yes, This is something that is highly
                                    personal</p>
                                <p className={"text-xs font-light"}>This is one of my ways of showing eternal
                                    love to the girl I love.</p>
                            </div>
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}