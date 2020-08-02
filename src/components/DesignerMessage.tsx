import React, {Fragment} from 'react';
import {faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class DesignerMessage extends React.Component<{}, { bannerHidden: any }> {

    state = {
        bannerHidden: window.localStorage.getItem("bannerHidden"),
    };

    closeBanner() {
        window.localStorage.setItem("bannerHidden", "1")
        this.setState({bannerHidden: "1"})
    }

    render() {
        let {bannerHidden}: any = this.state

        if (bannerHidden == null) {
            window.localStorage.setItem("bannerHidden", "0");
        } else {
            bannerHidden = parseInt(bannerHidden)
        }

        bannerHidden = !!bannerHidden

        console.log(bannerHidden)
        return (
            <Fragment>
                {!bannerHidden ?
                    <div  className="flex py-3 px-4 bg-red-700 shadow">
                        <div className={"flex-1 flex justify-center"}>
                            <div className="font-light text-xs md:text-base">
                                <p>I am not a frontend developer or UX designer, nor do I want to be one.</p>
                                <p>I am a backend developer so my portfolio will not look nice compared to others, I am
                                    trying to make it better and prettier every time I work on it.</p>
                                <p>The repository might contain sketched how I want to build it. <a
                                    className={"transition duration-150 ease-in-out underline hover:text-blue-700"}
                                    href={"https://github.com/tigomiddelkoop/Portfolio"}>Repository</a></p>
                                <p>Once you click this banner away it stays closed</p>
                            </div>
                            <FontAwesomeIcon onClick={this.closeBanner.bind(this)} className={"self-center ml-6 text-lg"} icon={faTimes}/>
                        </div>
                    </div> : ""}
            </Fragment>
        );
    }
};
