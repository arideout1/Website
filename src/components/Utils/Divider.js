import React, { useState } from 'react';
import styles from './Divider.module.css';

function Divider(props) {

    let size = props.size
    let tint = props.tint
    let direction = props.direction
    let padding = props.padding

    if (padding !== true) {
        padding = false
    }

    if (size === "small") {
        size = styles.small
    } else if (size === "large") {
        size = styles.large
    } else {
        size = styles.medium
    }


    if (tint === "light") {
        tint = styles.light
    } else if (size === "dark") {
        tint = styles.dark
    } else {
        tint = styles.middle
    }


    if (direction === "horizontal") {
        direction = styles.horizontal
    } else {
        direction = styles.vertical
    }

    return (
        <div className={`${direction} ${padding && styles.padding}`}>
            <div className={`${styles.divider} ${direction} ${size} ${tint}`} />
        </div>
    )
}

export default Divider;

export const DividerChoices = {
    Small: "small",
    Medium: "medium",
    Larg: "large",
    Light: "light",
    Middle: "middle",
    Dark: "dark",
    Horizontal: "horizontal",
    Vertical: "vertical",
};