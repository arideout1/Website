import styles from "./DiceFace.module.css"

export const DiceFace = (props) => {
    return <div className={styles.dice}>
        {props.letter === "Q" ? "Qu" : props.letter}
    </div> 
}