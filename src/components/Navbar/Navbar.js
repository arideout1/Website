import { Button } from "../Button/Button";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems"
import { Link } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        return (
            <nav className="NavbarItems">
                <FontAwesomeIcon className="icon" icon={faCode} />
                <h1 className="navbar-logo">Adam Rideout<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            // <li key={index}>
                            //     <a className={item.cName} href={item.url}>
                            //         {item.title}
                            //     </a>
                            // </li>
                            <Link style={{ textDecoration: 'none' }} to={item.url}>
                                <div className={item.cName}>
                                    {item.title}
                                </div>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}