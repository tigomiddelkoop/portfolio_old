import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

import Layout from "./layouts/layout";
import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Error404 from "./pages/Errors/Error404";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/projects/:id" exact component={Project}/>
                    <Route path="/contact" exact component={Contact}/>

                    <Route component={Error404}/>
                </Switch>
            </Layout>
        );
    }
}

App.defaultProps = {
    appUrl: process.env.MIX_APP_URL
};

App.propTypes = {
    appUrl: PropTypes.string
};

export default App;

