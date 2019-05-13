import * as React from "react";
import {Spinner} from "reactstrap";
import ProjectCard from "../components/projectCard";


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
        fetch("https://portfolio.staging.genericdevelopment.nl/api/projects", {
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
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {

        const {error, isLoaded, projects} = this.state;
        let projectResult;

        if (!isLoaded || error) {
            projectResult = <div><span><br /><Spinner style={{ width: ' 10rem', height: '10rem' }} type={"grow"} /><br /><h1>Loading Projects</h1></span><br /><br /></div>
        } else {
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
                    <h1 className="text--center">A Project</h1>
                    <h5 className="text--center">These are the projects I am the most proud of!</h5>
                    <h5 className="text--center" style={{fontSize: 12 + "px"}}>There are two Git servers I use, GitHub
                        and my own so there can be two links to the corresponding repo's</h5>
                    <hr/>
                    <br/>
                    {isLoaded ?
                        <div className="card-columns project-masonry">
                            {projectResult}
                        </div> :

                        <div className="card text--center"> {projectResult} </div>}

                    </div>
                </div>
                )
                }
                }



