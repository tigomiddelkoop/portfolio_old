import React, {Fragment} from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class DesignerMessage extends React.Component<any, { bannerHidden: any }> {

    bannerHidden: boolean | number = false;
    state = {
        bannerHidden: window.localStorage.getItem("bannerHidden"),
    };


    componentDidMount() {
        let {bannerHidden}: any = this.state

        if (bannerHidden == null) {
            window.localStorage.setItem("bannerHidden", "0");
        } else {
            bannerHidden = parseInt(bannerHidden)
            this.setState({bannerHidden: !!bannerHidden})
        }
    }

    /**
     *
     * Closes the banner that displays when someone clicks the cross on the banner
     *
     * @return {void} - Returns nothing
     *
     */

    closeBanner() {
        window.localStorage.setItem("bannerHidden", "1")
        this.setState({bannerHidden: "1"})
    }

    render() {
        let {bannerHidden}: any = this.state
        bannerHidden = !!bannerHidden

        return (
            <Fragment>
                {!bannerHidden ?
                    <div className="flex py-3 mb-5 px-4 bg-red-700 shadow rounded-lg">
                        <div className={"flex-1 flex justify-center"}>
                            <div className="font-light text-md md:text-base">
                                <p>I am not a frontend developer or UX designer, nor do I want to be one. I am a backend
                                    developer so my portfolio will not look nice compared to others, </p>
                            </div>
                            <FontAwesomeIcon onClick={this.closeBanner.bind(this)}
                                             className={"self-center ml-6 text-lg"} icon={faTimes}/>
                        </div>
                    </div> : ""}
            </Fragment>
        );
    }
};
