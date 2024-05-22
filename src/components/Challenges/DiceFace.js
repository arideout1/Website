import styles from "./DiceFace.module.css";

export const DiceFace = (props) => {
  return (
    <div className={props.triggerRoll ? styles.dice : styles.dice2}>
      {props.letter === "Q" ? "Qu" : props.letter}
    </div>
  );
};
