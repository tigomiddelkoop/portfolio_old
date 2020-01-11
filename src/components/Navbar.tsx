import React from 'react';
import Tigo from "../img/photo.jpg";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {


    render() {

        return (
            <div className="bg-gray-900 align-middle p-4 flex">
                <img className="border-2 h-8 w-8 rounded-full" alt="" src={Tigo}/>
                <Link to="/" className="align-middle font-light">Tigo Middelkoop</Link>
            </div>
        );
    }
};
