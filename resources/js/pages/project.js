import * as React from "react";
import {Badge, Card, Spinner} from "reactstrap";
import ProjectCard from "../components/projectCard";
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import CardHeader from "reactstrap/es/CardHeader";


export default class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    };

    componentDidMount() {
        fetch(process.env.MIX_APP_URL + "/api/projects/" + this.props.match.params.id, {
            method: "GET",
            mode: "no-cors",
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        }).catch(reason => console.error(reason)).then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        project: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {

        const {error, isLoaded, project} = this.state;
        let projectResult;

        if (!isLoaded || error) {
            projectResult = <span><Spinner color={"dark"}/><br /><a>Loadin' project info</a></span>
        } else {
            projectResult = <div><Card>
                <CardHeader>Project Info</CardHeader>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Written in: {project.language}</li>
                    <li className="list-group-item">Demo: {project.demo_url}</li>
                    <li className="list-group-item">Development Stage: {project.development_stage}</li>
                </ul>
            </Card></div>
        }

        return (
            <div>
                <div className="container">
                    <h1 className="text--center">{isLoaded ? project.name : null}</h1>
                    <h5 className="text--center">{isLoaded ? project.short_description : <Spinner />}</h5>
                    <hr/>
                    <br/>
                    {isLoaded ?
                        <div className="card-columns project-masonry">
                            {projectResult}
                        </div> :

                        <Card className="text--center"><CardBody> {projectResult} </CardBody></Card>}

                </div>
            </div>
        )
    }
}



