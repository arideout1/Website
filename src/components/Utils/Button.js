import React from "react";
import styles from "./Button.module.css"
import { Link } from "react-router-dom";

function Button(props) {

    let size = props.size
    const type = props.type
    const to = props.to || "/"
    const buttonText = props.buttonText || "Button"

    if (size === "small") {
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
                    <a href={to}>
                        <button className={`${styles.button} ${size}`}>{buttonText}</button>
                    </a>
                    :
                    <Link style={{ textDecoration: 'none' }} to={to} >
                        <button className={`${styles.button} ${size}`}>{buttonText}</button>
                    </Link>
            }
        </div>
    )
}

export default Button;