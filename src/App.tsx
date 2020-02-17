import React from 'react';

import Navbar from "./components/Navbar";
import Homepage from './pages/Homepage';
import { Route } from 'react-router-dom';
import Projects from "./pages/Projects";
import ProjectInfo from "./pages/ProjectInfo";

export default class App extends React.Component {


    render() {

        return (
            <div>
                <Navbar/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/:id" component={ProjectInfo}/>
            </div>
        );
    }
};
