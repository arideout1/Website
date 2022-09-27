import React from "react";
import styles from "./Button.module.css"
import { Link } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {

    let size = props.size
    const type = props.type
    const to = props.to || "/"
    const buttonText = props.buttonText || "Button"
    const iconType = props.iconType || null
    let icon = null;

    if (iconType === "fa") {
        if (props.icon == "faLinkedin") {
            icon = <div> <FontAwesomeIcon size='xl' className={styles.icon} icon={faLinkedin} /></div >

        }
    }

    if (size === "xs") {
        size = styles.xs
    } else if (size === "small") {
        size = styles.small
    } else if (size === "large") {
        size = styles.large
    } else {
        size = styles.medium
    }


    return (
        <div className={styles.buttonContainer}>
            {
                type == "a" ?
                    <a className={styles.aTag} href={to}>
                        <button className={`${styles.button} ${size}`}>
                            {icon !== null ? icon : ""}
                            {buttonText}
                        </button>
                    </a>
                    :
                    <Link style={{ textDecoration: 'none' }} to={to} >
                        <button className={`${styles.button} ${size}`}>
                            {buttonText}
                            {icon !== null ? icon : ""}
                        </button>
                    </Link>
            }
        </div>
    )
}

export default Button;