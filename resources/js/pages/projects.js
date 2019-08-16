import * as React from "react";
import {Card, Spinner} from "reactstrap";
import ProjectCard from "../components/projectCard";
import CardBody from "reactstrap/es/CardBody";


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
        fetch(process.env.MIX_APP_URL + "/api/projects/", {
            method: "GET",
            mode: "no-cors",
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        }).catch(reason => console.error(reason)).then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        projects: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }


    render() {

        //@TODO FIX THE GODDAMN ERROR FIXING THINGY WHATEVER
        const {error, isLoaded, projects} = this.state;
        let projectResult;

        if (!isLoaded || error) {
            projectResult = <span><Spinner color={"dark"}/><br /><a>They see me loadin'</a></span>
        } else if (isLoaded) {
            projectResult = projects.map(item => (
                <ProjectCard thumbnail={item.thumbnail} name={item.name} language={item.language}
                             shortDescription={item.short_description}
                             github={item.github}
                             genericgit={item.genericgit}
                             url={"/projects/" + item.id}
                />
            ))
        }

        return (
            <div>
                <div className="container">
                    <h1 className="text--center">My Projects</h1>
                    <h5 className="text--center">These are the projects I am the most proud of!</h5>
                    <h5 className="text--center" style={{fontSize: 12 + "px"}}>There are two Git servers I use, GitHub
                        and my own so there can be two links to the corresponding repo's</h5>
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



