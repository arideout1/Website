import { Link, Navigate, useNavigate } from "react-router-dom"
import Button from "../Utils/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import styles from "./Games.module.css"

export const Games = () => {
    
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/games/boggle");
    }

    return (
    <div className={styles.buttonContainer}>         
        <button className={styles.gameButton} onClick={handleClick}>
            Boggle
            <FontAwesomeIcon className={styles.icon} icon={faGamepad} />
        </button>
    </div>)
}