import React from "react";
import styles from "./Button.module.css"
import { Link } from "react-router-dom";
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JSLogo from "../../images/javascript-1.svg"
import TSLogo from "../../images/Typescript_logo.svg.png"
import ReduxLogo from "../../images/icons8-redux.svg"
import DJLogo from "../../images/django.svg"
import DockerLogo from "../../images/docker.png"
import CSSLogo from "../../images/CSS3_logo.svg.png"
import PythonLogo from "../../images/Python-logo.svg.png"
import ReactLogo from "../../images/React-logo.svg.png"
import JavaLogo from "../../images/java-logo.png"

function Button(props) {

    let size = props.size
    const type = props.type
    const to = props.to || "/"
    const buttonText = props.buttonText || "Button"
    const iconType = props.iconType || null
    let icon = null;

    if (size === "xs") {
        size = styles.xs
    } else if (size === "small") {
        size = styles.small
    } else if (size === "large") {
        size = styles.large
    } else {
        size = styles.medium
    }


    if (iconType === "fa") {
        if (props.icon === "faLinkedin") {
            icon = <div className={styles.faIcon}> <FontAwesomeIcon className={`${styles.icon} `} icon={faLinkedin} /></div >

        }
    }
    else if (iconType === "svg") {
        if (props.icon === "javascript") {
            icon = <img className={`${size} ${styles.icon} `} src={JSLogo} alt="Javascript Logo" />
        } else if (props.icon === "typescript") {
            icon = <img className={`${size} ${styles.icon} `} src={TSLogo} alt="TypeScript Logo" />
        } else if (props.icon === "redux") {
            icon = <img className={`${size} ${styles.icon} `} src={ReduxLogo} alt="Redux Logo" />
        } else if (props.icon === "django") {
            icon = <img className={`${size} ${styles.icon} `} src={DJLogo} alt="Django Logo" />
        } else if (props.icon === "docker") {
            icon = <img className={`${size} ${styles.icon} `} src={DockerLogo} alt="Docker Logo" />
        } else if (props.icon === "css") {
            icon = <img className={`${size} ${styles.icon} `} src={CSSLogo} alt="CSS Logo" />
        } else if (props.icon === "python") {
            icon = <img className={`${size} ${styles.icon} `} src={PythonLogo} alt="CSS Logo" />
        } else if (props.icon === "java") {
            icon = <img className={`${size} ${styles.icon} `} src={JavaLogo} alt="CSS Logo" />
        } else if (props.icon === "react") {
            icon = <img className={`${size} ${styles.icon} `} src={ReactLogo} alt="CSS Logo" />
        }
    }

    return (
        <div className={`${size} ${styles.buttonContainer}`}>
            {
                type == "a" ?
                    <a target="_blank" className={styles.aTag} href={to}>
                        <button className={`${styles.button} ${size}`}>
                            {buttonText}
                            {icon !== null ? icon : ""}
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