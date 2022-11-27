import React from "react";
import { NavLink, Link } from "react-router-dom";
import userCircle from '../images/User_cicrle_light.svg';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Image} from 'semantic-ui-react'

const Navbar = (props) => {
    return (
        <div>
            <Menu color="blue" inverted fixed="top" size="large" borderless style={{borderBottomWidth: "5px", borderBottomColor: "black" }}>
            <Menu.Item
                as={NavLink} to="/"
                name=" "
                active={false}
            >
                Dashboard
            </Menu.Item>
            <Menu.Item
                as={NavLink} to="/"
                name="Schedule"
                active={false}
            >
                Schedule
            </Menu.Item>
            <Menu.Item
                as={NavLink} to="/patients"
                name="Patients"
                active={false}
            >
                Patients
            </Menu.Item>
            <Menu.Item
                as={NavLink} to="/"
                name=" "
                active={true}
                position="right"
            >
                <Image src={userCircle} size="mini"/>
            </Menu.Item>
            </Menu>
        </div>
    ); 
}
//change
export default Navbar;