import React from 'react';
import Button from '../Utils/Button';
import styles from "./CodeChallenges.module.css"

function CodeChallenges() {

    const challenges = [{ name: "Color Picker", url: "/challenges/color" }]
    const content = [
        <div>
            <div className={styles.title}>
                Color Picker
            </div>
            <div className={styles.description}>
                Choose the right hex color to match the square!
            </div>
        </div>]
    const ogs = [
        <div className={styles.buttonContainer}>
            <Button size="xs" to="https://www.youtube.com/watch?v=QNYljS0_TOE&list=PL6x5Q-Sj_Bla3_wMqhETxMBjFml0XJNPI&index=3" type="a" buttonText="Original Challenge" />
        </div>
    ]
    return (<div className={styles.links}>
        {
            challenges.map((item, index) => {
                return <div className={styles.link}>
                    {content[index]}
                    <Button key={index} to={item.url} buttonText="View" />
                    {ogs[index]}
                </div>
            })
        }
    </div >)
}

export default CodeChallenges;