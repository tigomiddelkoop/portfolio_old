import * as React from "react";
import {Spinner} from 'reactstrap';
import GenericNavbar from "../components/navbar"

class Layout extends React.Component {

    render() {
        return (
            <div>
                <GenericNavbar/>
                <main className="py-4">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout