import React from 'react';
import JackHammer from "../../jackhammer.png"
import styles from "./ComingSoon.module.css"
import UnderContructionText from "../../UCText.png"

function ComingSoon() {
    return (<div className={styles.container}>
        <img className={styles.img} src={JackHammer}></img>
        <img className={styles.txt} src={UnderContructionText}></img>
        <div className={styles.bottomText}>This page isn't finished yet, but it's coming soon!</div>
    </div >)
}

export default ComingSoon;