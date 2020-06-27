import React from 'react';

import Navbar from "./components/Navbar";
import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import Projects from "./pages/Projects";
import ProjectInfo from "./pages/ProjectInfo";
import Easteregg from './pages/Easteregg';
import Notfound from "./pages/Notfound";

export default class App extends React.Component {


    render() {

        return (
            <div className={"bg-gray-800 text-white h-screen"}>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/projects/:id" component={ProjectInfo}/>


                    <Route exact path="/easteregg" component={Easteregg}/>
                    <Route component={Notfound}/>
                </Switch>
            </div>
        );
    }
};
