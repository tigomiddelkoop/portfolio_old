import * as React from "react";
import Emojify from 'react-emojione';
import {Link} from "react-router-dom";

export default class Error404 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    };

    componentDidMount() {

    }


    render() {

        return (
            <div>
                <div className="container">
                    {/*<hr />*/}
                    <h1 className="text--center"><Emojify style={{height: 50, width: 50}}><span>:cry:</span></Emojify>
                    </h1>
                    <h1 className="text--center"></h1>
                    <h5 className="text--center">Noooo! You encountered a wild 404 error!</h5>
                    <h5 className="text--center" style={{fontSize: 12 + "px"}}>We've searched far and wide, but this
                        page is gone.</h5>
                    <hr/>
                    <div className="container">
                        <h5 className="text--center"><Link className="btn btn-primary align-items-center text--center"
                                                           to="/" role="button">Return to the homepage</Link></h5>
                    </div>
                </div>
            </div>
        )
    }
}



