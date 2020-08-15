import React, { Fragment } from "react";
import hearts from "../img/hearts.png"
import Moment, { Duration, duration } from "moment";


export default class Easteregg extends React.Component<any, any> {

    interval: any;

    onfocus: Function = function (e: any) {
        console.log(`TAB ACTIVE ${new Date()}`)
    };

    onblur: Function = function (e: any) {
        console.log(`TAB INACTIVE ${new Date()}`)
    }

    dates = {
        dateOfRelation: Moment("2020-03-13"),
    }

    state = {
        eastertoggled: false,
        counter: this.formatRelationLength(this.calculateRelationLength()),
        milestones: this.getMilestones(this.calculateRelationLength())
    };

    /**
     *
     * Toggles the easter egg when the button got pressed
     *
     * @return {void} returns nothing
     *
     */

    toggleEaster = () => {
        this.setState({ eastertoggled: !this.state.eastertoggled })
    }


    /**
     *
     * Executes when the page gets mounted
     *
     * @return {void} Returns nothing
     *
     */

    componentDidMount(): void {

        // window.addEventListener("onfocusout", this.onblur())
        // window.addEventListener("onfocusin", this.onfocus())

        // window.onblur = this.onblur();
        // window.onfocus = this.onfocus();

        this.interval = setInterval(() => {

            const relationLength = this.calculateRelationLength()
            const relationLengthFormatted = this.formatRelationLength(relationLength)

            const milestones = this.getMilestones(relationLength);
            console.log(milestones);
            this.setState({ counter: relationLengthFormatted, milestones })

        }, 500) // It is not really necessary to do it every 500ms, but i felt like it needed to be accurate enough.



    }

    /**
     *
     * Executes when the component will unmount
     *
     * @return {void} The Element that needs to be rendered
     *
     */

    componentWillUnmount(): void {
        clearInterval(this.interval)
    }

    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {

        const { counter, milestones } = this.state;

        return (

            <div
                className="min-h-screen flex items-center text-center content-center justify-center transition duration-150 ease-in-out">
                <div className="align-middle">
                    {!this.state.eastertoggled ?
                        <Fragment>
                            <div>
                                <h1 className="text-5xl md:text-5xl font-light">EasterEgg!</h1>
                                <h1 className="text-md md:text-md font-light">Click Reveal to see what it is!</h1>
                                <button onClick={this.toggleEaster}
                                    className={"shadow bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded-lg mt-2"}>
                                    <img alt={"hearts"} className={"inline w-6 mr-2"} src={hearts} />
                                    <p className={"inline"}>Reveal</p>
                                </button>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <div className={""}>
                                <h1 className="text-6xl font-light">Demi</h1>
                                <img alt={"hearts"} className={"w-32 inline"} src={hearts} />

                                <h1 className="text-4xl md:text-6xl font-light">{this.dates.dateOfRelation.format("MMMM DD[th] YYYY")}</h1>
                                <h1 className="text-xs md:text-lg text-gray-500 font-light">{counter}</h1>
                            </div>

                            <div className={"bg-gray-900 m-2 rounded-lg shadow"}>
                                <h1 className={`text-4xl p-2 border-b-2 border-gray-700`}>"Milestones"</h1>
                                <div className={`p-2`}>
                                    <p className={milestones.oneweek ? `text-white` : `text-gray-700`}>One week</p>
                                    <p className={milestones.onemonth ? `text-white` : `text-gray-700`}>One Month</p>
                                    <p className={milestones.sixmonths ? `text-white` : `text-gray-700`}>Six months</p>
                                    <p className={milestones.oneyear ? `text-white` : `text-gray-700`}>One year</p>
                                </div>
                            </div>

                            <div className={"bg-gray-900 m-2 p-2 rounded-lg shadow"}>
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

    /**
     *
     * Calculates the length of the relationship between Demi and me
     *
     * @return {Duration} - A object containing the time of our relationship in computerreadable form
     *
     */

    calculateRelationLength(): Duration {

        const length = Moment();
        let duration = Moment.duration(length.diff(this.dates.dateOfRelation));

        return duration;
    }


    /**
     *
     * Calculates the length of the relationship between Demi and me
     *
     * @return {string} - A string containing the time of our relationship in humanreadable form
     *
     */

    formatRelationLength(duration: Duration): string {
        let string = ""
        const years = duration.years()
        const months = duration.months()
        const days = duration.days()
        const hours = duration.hours()
        const minutes = duration.minutes()
        const seconds = duration.seconds()


        string += ` ${years} Year${years !== 1 ? 's' : ''},`
        string += ` ${months} Month${months !== 1 ? 's' : ''},`
        string += ` ${days} Day${days !== 1 ? 's' : ''},`
        string += ` ${hours} Hour${hours !== 1 ? 's' : ''},`
        string += ` ${minutes} Minute${minutes !== 1 ? 's' : ''}`
        string += ` and`
        string += ` ${seconds} Second${seconds !== 1 ? 's' : ''}`

        return string;
    }

    getMilestones(duration: Duration): any {

        /**
         * 
         * I am going to call them milestones for now but that needs to be rephrased really quick!
         * 
         */
        let dates = {
            years: duration.years(),
            months: duration.months(),
            weeks: duration.weeks(),
        }

        let milestones = {
            oneweek: false,
            onemonth: false,
            sixmonths: false,
            oneyear: false,
            twoyears: false,
            threeyears: false
        }

        console.log(dates);


        if (dates.weeks >= 1 || dates.months >= 1) milestones.oneweek = true;
        if (dates.months >= 1 || dates.years >= 1) milestones.onemonth = true;
        if (dates.months >= 6 || dates.years >= 1) milestones.sixmonths = true;
        if (dates.years >= 1) milestones.oneyear = true;
        if (dates.years >= 2) milestones.oneyear = true;
        if (dates.years >= 3) milestones.oneyear = true;

        return milestones;

    }

}