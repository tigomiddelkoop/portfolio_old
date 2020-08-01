import React from 'react';

import DesignerMessage from "./components/DesignerMessage";
import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import Projects from "./components/Projects";
import ProjectInfo from "./pages/ProjectInfo";
import Easteregg from './pages/Easteregg';
import Notfound from "./pages/Notfound";

export default class App extends React.Component {


    render() {

        return (
            <div className={"bg-gray-800 h-full min-h-screen text-white"}>
                <DesignerMessage/>
                <div className={"p-5"}>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/easteregg" component={Easteregg}/>
                        <Route component={Notfound}/>
                    </Switch>
                </div>
            </div>
        );
    }
};
