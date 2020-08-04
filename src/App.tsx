import React from 'react';

import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import Easteregg from './pages/Easteregg';
import Notfound from "./pages/Notfound";

export default class App extends React.Component {


    render() {

        return (
            <div className={"bg-gray-800 h-full min-h-screen text-white"}>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/easteregg" component={Easteregg}/>
                    <Route component={Notfound}/>
                </Switch>

            </div>
        );
    }
};
