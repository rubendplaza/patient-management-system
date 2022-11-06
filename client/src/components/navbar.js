import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <div className="nav">
                <Link to="/">Dashboard</Link>
                <Link to="/">Schedule</Link>
                <Link to="/">Patients</Link>
            </div>
        </div>
    ); 
}

export default Navbar;