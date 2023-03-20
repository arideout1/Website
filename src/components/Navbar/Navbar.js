import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../Utils/Button";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const moreOptions = [
        { key: "hobbies", value: "Hobbies", url: '/hobbies' },
        { key: "blog", value: "Blog", url: '/blog' },
        { key: "codeChallenges", value: "Code Challenges", url: '/challenges' },
    ]
    return (
        <nav className="NavbarItems">
            <Link className={"navbar-left-icon"} to={"/"}>
                <FontAwesomeIcon className="icon" icon={faCode} />
            </Link>
            <Link className={"navbar-left"} to={"/"}>
                <h1 className="navbar-logo">Adam Rideout<i className="fab fa-react"></i></h1>
            </Link>
            <div className="menu-icon" onClick={() => handleClick()}>
                {clicked ?
                    <FontAwesomeIcon className="icon" icon={faTimes} /> :
                    <FontAwesomeIcon className="icon" icon={faBars} />}
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <Link key={index} style={{ textDecoration: 'none' }} onClick={() => handleClick()} to={item.url}>
                            <div className={item.cName}>
                                {item.title}
                            </div>
                        </Link>
                    )
                })}
                {clicked && moreOptions.map((item, index) => {
                    return (
                        <Link key={index} style={{ textDecoration: 'none' }} onClick={() => handleClick()} to={item.url}>
                            <div className={"nav-links"}>
                                {item.value}
                            </div>
                        </Link>
                    )
                })}

            </ul>
            {<div className="dropdown"><Dropdown options={moreOptions} text="More" /></div>}
        </nav>
    )
}

export default Navbar;