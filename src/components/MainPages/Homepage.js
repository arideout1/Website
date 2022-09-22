import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import Portrait2 from "../../portrait-cropped.jpg"
import { Link } from 'react-router-dom';

function Homepage() {

    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        setIsRendered(true);
    });

    return (<div>
        <div className={styles.background}>
        </div>
        <div className={styles.columns}>
            <div className={styles.columnContainer}>
                <div className={styles.columnLeft}>
                    <div className={`${styles.leftSide} ${styles.transition1} ${isRendered ? styles.transitionEnd : ""}`}>
                        <img className={`${styles.img}`} src={Portrait2} alt="" ></img>
                    </div>
                    <div className={styles.dividerHorizontalContainer}>
                        <div className={styles.dividerHorizontal} />
                    </div>
                    <div className={`${styles.leftSide} ${styles.transition2} ${isRendered ? styles.transitionEnd : ""}`}>
                        <div className={styles.textCard}>
                            <div className={styles.cardContent}>
                                <div className={styles.title}>Who am I?</div>
                                <div className={styles.paragraph}>Hi! I'm Adam Rideout. I'm a software engineer based in San Francisco. I do mostly front end web development but I also have expereince with backend, data science, machine learning, Web3 and more! In my free time I enjoy the outdoors through rock climbing, hiking, snowboard and lots of other activities. Click below to learn more!</div>
                                <Link style={{ textDecoration: 'none' }} to={"about"} >
                                    <button className={styles.button}>About Me</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dividerHorizontalContainer}>
                        <div className={styles.dividerHorizontal} />
                    </div>
                    <div className={`${styles.leftSide} ${styles.transition3} ${isRendered ? styles.transitionEnd : ""}`}>
                        <img className={`${styles.img}`} src={Portrait2} alt="" ></img>
                    </div>
                </div>
            </div>
            <div className={styles.dividerVerticleContainer}>
                <div className={styles.dividerVerticle} />
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.columnRight}>
                    <div className={`${styles.rightSide} ${styles.transition1} ${isRendered ? styles.transitionEnd : ""}`}>
                        <div className={styles.textCard}>
                            <div className={styles.cardContent}>
                                <div className={styles.title}>Who am I?</div>
                                <div className={styles.paragraph}>Hi! I'm Adam Rideout. I'm a software engineer based in San Francisco. I do mostly front end web development but I also have expereince with backend, data science, machine learning, Web3 and more! In my free time I enjoy the outdoors through rock climbing, hiking, snowboard and lots of other activities. Click below to learn more!</div>
                                <Link style={{ textDecoration: 'none' }} to={"about"} >
                                    <button className={styles.button}>About Me</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dividerHorizontalContainer}>
                        <div className={styles.dividerHorizontal} />
                    </div>
                    <div className={`${styles.rightSide} ${styles.transition2} ${isRendered ? styles.transitionEnd : ""}`}>
                        <img className={`${styles.img}`} src={Portrait2} alt="" ></img>
                    </div>

                    <div className={styles.dividerHorizontalContainer}>

                        <div className={styles.dividerHorizontal} />
                    </div>
                    <div className={`${styles.rightSide} ${styles.transition3} ${isRendered ? styles.transitionEnd : ""}`}>
                        <div className={styles.textCard}>
                            <div className={styles.cardContent}>
                                <div className={styles.title}>Who am I?</div>
                                <div className={styles.paragraph}>Hi! I'm Adam Rideout. I'm a software engineer based in San Francisco. I do mostly front end web development but I also have expereince with backend, data science, machine learning, Web3 and more! In my free time I enjoy the outdoors through rock climbing, hiking, snowboard and lots of other activities. Click below to learn more!</div>
                                <Link style={{ textDecoration: 'none' }} to={"about"} >
                                    <button className={styles.button}>About Me</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Homepage;