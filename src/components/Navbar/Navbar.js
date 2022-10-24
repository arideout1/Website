import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../Utils/Button";

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
                <Link className={"navbar-left-icon"} to={"/"}>
                    <FontAwesomeIcon className="icon" icon={faCode} />
                </Link>
                <Link className={"navbar-left"} to={"/"}>
                    <h1 className="navbar-logo">Adam Rideout<i className="fab fa-react"></i></h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked ?
                        <FontAwesomeIcon className="icon" icon={faTimes} /> :
                        <FontAwesomeIcon className="icon" icon={faBars} />}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link style={{ textDecoration: 'none' }} onClick={this.handleClick} to={item.url}>
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