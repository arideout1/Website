import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import Portrait2 from "../../portrait-cropped.jpg"
import Frontend from "../../front-end.jpg"
import ContactMe from "../../Contact-Me.jpg"
import { Link } from 'react-router-dom';
import Button from '../Utils/Button';
import { HPContact, HPWhatIDo, HPWhoIAm } from '../../utils/Strings.js'

function Homepage() {

    const [isRendered, setIsRendered] = useState(false);
    const [renderMobile, setRenderMobile] = useState(window.innerWidth < 760);

    useEffect(() => {
        function handleResize() {
            setRenderMobile(window.innerWidth < 760)
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            console.log(renderMobile)
        }
        window.addEventListener('resize', handleResize)
    });

    useEffect(() => {
        setIsRendered(true);
    });

    const desktopView = <div className={styles.columns}>
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
                            <div className={styles.title}>What I do</div>
                            <div className={styles.paragraph}>I like to build things. I've built cutting edge websites, a machine learning model to detect heart disease, and a blockchain integrated blog service just to name a few. Learn more about my portfolio of projects below</div>
                            <Link style={{ textDecoration: 'none' }} to={"portfolio"} >
                                <button className={styles.button}>Portfolio</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.dividerHorizontalContainer}>
                    <div className={styles.dividerHorizontal} />
                </div>
                <div className={`${styles.leftSide} ${styles.transition3} ${isRendered ? styles.transitionEnd : ""}`}>
                    <img className={`${styles.img}`} src={ContactMe} alt="" ></img>
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
                            <div className={styles.title}>Who I am</div>
                            <div className={styles.paragraph}>{HPWhoIAm}</div>
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
                    <img className={`${styles.img}`} src={Frontend} alt="" ></img>
                </div>

                <div className={styles.dividerHorizontalContainer}>

                    <div className={styles.dividerHorizontal} />
                </div>
                <div className={`${styles.rightSide} ${styles.transition3} ${isRendered ? styles.transitionEnd : ""}`}>
                    <div className={styles.textCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.title}>How to reach me</div>
                            <div className={styles.paragraph}>{HPContact}</div>
                            <Link style={{ textDecoration: 'none' }} to={"contact"} >
                                <button className={styles.button}>Contact Me</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    const mobileView = <div>
        <div className={`${isRendered ? styles.transitionEnd : ""}`}>
            <div className={styles.mobileTextCardWrapper}>
                <div className={styles.mobileTextCard}>
                    <div className={styles.portfolioCardContentWrapper}>
                        <div className={styles.cardContent}>
                            <div className={styles.title}>Who I am</div>
                            <div className={styles.paragraph}></div>
                            <div className={styles.mobileButton}>
                                <Button to={"/about"} buttonText="About Me"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.dividerHorizontalContainer}>
            <div className={styles.dividerHorizontal} />
        </div>
        <div className={`${isRendered ? styles.transitionEnd : ""} `}>
            <div className={styles.mobileTextCardWrapper}>
                <div className={styles.mobileTextCard}>
                    <div className={styles.aboutCardContentWrapper}>
                        <div className={styles.cardContent}>
                            <div className={styles.title}>What I do</div>
                            <div className={styles.paragraph}>{HPWhatIDo}</div>
                            <div className={styles.mobileButton}>
                                <Button to={"/portfolio"} buttonText="Portfolio"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.dividerHorizontalContainer}>
            <div className={styles.dividerHorizontal} />
        </div>
        <div className={`${isRendered ? styles.transitionEnd : ""}`}>
            <div className={styles.mobileTextCardWrapper}>
                <div className={styles.mobileTextCard}>
                    <div className={styles.contactCardContentWrapper}>
                        <div className={styles.cardContent}>
                            <div className={styles.title}>How to reach me</div>
                            <div className={styles.paragraph}>I'm always interested in connecting with people. Whether it’s to discuss projects, opportunities or just to get to know each other better, don't hesitate to reach out!</div>
                            <div className={styles.mobileButton}>
                                <Button to={"/contact"} buttonText="Contact Me"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    return (
        <div>
            {renderMobile ? mobileView : desktopView}
        </div>)
}

export default Homepage;