import React, { useState, useRef, useEffect } from 'react';
import styles from './About.module.css';

function About() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        setIsNavOpen(true);
    });

    return (
        <div className={`${styles.wrapper}  ${isNavOpen ? styles.isNavOpen : ""}`}>
            <div className={`${styles.nav}}`}>
                <button onClick={() => setIsNavOpen(v => !v)}>
                    This is a button
                </button>
                <div>
                    THis is test text
                </div>
            </div>
        </div>
    )
}

export default About;