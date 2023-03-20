import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./ColorGuesser.module.css"

function ColorGuesser() {

    const numColors = 3;

    const initialOptions = [];
    for (let i = 0; i < numColors; i++) {
        initialOptions.push("#" + (Math.floor(Math.random() * 16777216).toString(16)))
    }
    const [currentColor, setCurrentColor] = useState(initialOptions[0]);
    const [colorOptions, setColorOptions] = useState(shuffleArray(initialOptions));
    const [shuffleOptions, setShuffleOptions] = useState(true);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isUnsuccessful, setIsUnsuccessful] = useState(false);

    useEffect(() => {
        if (shuffleOptions) {
            setColorOptions(shuffleArray(colorOptions));
            setShuffleOptions(false);
        }
    }, [shuffleOptions]);

    function handleButtonClick(item) {
        if (item === currentColor) {
            setIsSuccessful(true);
            setIsUnsuccessful(false);
            createNewPuzzle();
        } else {
            setIsSuccessful(false);
            setIsUnsuccessful(true);
        }
    }

    function createNewPuzzle() {
        const newOptions = [];
        for (let i = 0; i < numColors; i++) {
            newOptions.push("#" + (Math.floor(Math.random() * 16777216).toString(16)))
        }
        setCurrentColor(newOptions[0]);
        setColorOptions(newOptions);
        setShuffleOptions(true);
    }

    function shuffleArray(inputArray) {
        const newOptions = [];
        while (inputArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * inputArray.length);
            newOptions.push(inputArray[randomIndex]);
            inputArray.splice(randomIndex, 1);
        }
        return newOptions;
    }

    return (<div className={styles.container}>
        <div className={styles.title}>What color is this?</div>
        <div className={styles.colorContainer} style={{ 'backgroundColor': currentColor }}></div>
        <div className={styles.buttons}>
            {
                colorOptions.map((item, index) => {
                    return <button key={index} className={styles.button} onClick={() => handleButtonClick(item)}>{index}: {item}</button>
                })
            }
        </div >
        {isSuccessful &&
            <div className={styles.right}>
                Success!
            </div>
        }
        {isUnsuccessful &&
            <div className={styles.wrong}>
                Wrong :(
            </div>
        }
    </div >)
}

export default ColorGuesser;