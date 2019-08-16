import * as React from "react";
import "../../../public/css/homepage.css"

export default class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                            <img src="https://genericdevelopment.nl/img/photo.jpg" className="profilepicture"/>

                        </div>
                        <div className="col-md-9">
                            <h1 className="text--center">Hi! I am Tigo Middelkoop</h1>
                            <h5 className="text--center">Welcome to my portfolio!</h5>
                            <div className="text--center">
                                <div className="btn-group">
                                    <a className="btn btn-primary"
                                       href="#about_me">About me</a>
                                    <a className="btn btn-secondary"
                                       href="">My CV</a>
                                </div>
                            </div>
                            <p className="text--center">Keep in mind that the language of the file is Dutch</p>
                        </div>
                    </div>
                    <br/>
                    <hr/>

                    <br/>
                    <section id="about_me">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text--center">About me</h1>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                    </section>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text--center">TimeLine</h1>
                        </div>
                    </div>
                    <br/>
                    <hr/>

                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text--center">Skills</h1>
                            <h5 className="text--center">The skills I am currently (or going to learn) are marked with a
                                clock / When learned or when I confident that I can use the skill it will be marked with
                                a check</h5>

                            <br/>
                        </div>
                        <div className="col-md-12">
                            <div className="card-columns">
                                <div className="card">
                                    <div className="card-header">
                                    </div>
                                    <div className="table table-responsive">
                                        <table>
                                            <tr>
                                                <td className="skills-text" style={{width: 100 + "%"}}><a
                                                    className="card-text"></a></td>
                                                <td className="skills-status"><span className="fas fa-clock"></span>
                                                </td>
                                                <td className="skills-status"><span className="fas fa-check"></span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

