import { useEffect, useState } from "react";
import styles from "./DiceFace.module.css";

export const DiceFace = (props) => {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setSpin(!spin);
  }, [props.triggerRoll]);

  return (
    <div className={spin ? styles.dice : styles.dice2}>
      {props.letter === "Q" ? "Qu" : props.letter}
    </div>
  );
};
