import * as React from "react";
import {Link} from "react-router-dom";


export default class ProjectCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        };
    }


    render() {


        return (

            <div className="card">
                {this.props.thumbnail ?
                <img src={this.props.thumbnail}
                     className="card-img-top" alt="..."/> : null }
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Written in: {this.props.language}</h6>
                    <p className="card-text">{this.props.shortDescription}</p>
                    <div className="btn-group" role="group" aria-label="Source Code">
                        <div className="btn-group dropup">
                            <button type="button" className="btn btn-secondary dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                Sourcecode
                            </button>
                            <div className="dropdown-menu">
                                {this.props.github ?
                                    <a className="dropdown-item" target="_blank" rel="noopener noreferrer"
                                       href={this.props.github}>GitHub</a>
                                    : null}
                                {this.props.genericgit ?
                                    <a className="dropdown-item" target="_blank" rel="noopener noreferrer"
                                       href={this.props.genericgit}>Generic Git</a>
                                    : null}
                            </div>
                        </div>
                        <Link className="btn btn-primary" to={this.props.url} role="button">View Project</Link>
                    </div>
                </div>
            </div>

        )
    }


}

