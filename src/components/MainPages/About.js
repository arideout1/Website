import React from 'react';
import styles from './About.module.css';
import Divider from '../Utils/Divider';
import { DividerChoices } from '../Utils/Divider';
import Button from '../Utils/Button';
import ExampleSwiper from '../Swipers/ExampleSwiper';
import USC from "../../USC-Logo.png";
import JobSwiper from '../Swipers/JobSwiper';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function About() {

    return (
        <div className={styles.sections}>
            <div className={styles.section}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        My Mission
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.body}>
                        I build frontends that are intuitive, sleek, and fast. For too long, the world of software has been dominted by
                        tools built with a lack of care for the experience of the average user. Software should be accessable to everyone, not
                        just those of us who were lucky enough to grow surounded by technology. My goal is to master frontend development so
                        that I can create products that users are excited to interact with.
                    </div>
                    <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                    <div className={styles.subSection}>
                        <div className={styles.sectionTitle}>Sleek</div>
                        <div>
                            Software should be appealing
                        </div>
                        <div className={styles.exampleButtonsContainer}>
                            <div className={styles.exampleButton}>
                                Things should look like this
                                <Button to="/about" buttonText="Fun" />
                            </div>
                            <div className={styles.exampleButton}>
                                Not like this
                                <button>Ugly</button>
                            </div>
                        </div>
                    </div>
                    <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                    <div className={styles.subSection}>
                        <div className={styles.sectionTitle}>Intuitive</div>
                        <div>
                            Software should be easy to use, even on mobile
                        </div>
                        <div className={styles.swiperContainer}>
                            <ExampleSwiper />
                        </div>
                    </div>
                    <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                    <div className={styles.subSection}>
                        <div className={styles.sectionTitle}>Fast</div>
                        <div className={styles.sectionBody}>
                            I stay up to date on the lastest technologies, industry trends and code tricks to ensure that the frontends
                            I build are always cutting edge and responsive. To see more about the technologies I've used and the projects they've been a part of, check out my portfolio page
                        </div>

                        <div className={styles.centerButton}>
                            <Button to="/portfolio" buttonText="View portfolio" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider direction={DividerChoices.Vertical} padding={true} />
            <div className={styles.section}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        My Background
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.subSection}>
                        <div className={styles.sectionTitle}>Education</div>
                        <div className={styles.exampleButtonsContainer}>
                            <img className={styles.img} src={USC} alt="" />
                            <div className={styles.backgroundSection}>
                                I studied Computer Science at the University of Southern California
                            </div>
                        </div>
                    </div>
                    <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                    <div className={styles.subSection}>
                        <div className={styles.sectionTitle}>Work Experience</div>
                        <div className={styles.swiperContainer}>
                            <JobSwiper />
                        </div>
                    </div>
                    <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                    <div className={styles.subSection}>
                        <div className={styles.centerButton}>
                            <div className={styles.sectionTitle}>Learn more about my background</div>
                            <Button iconType="fa" icon={"faLinkedin"} to="/portfolio" buttonText="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider direction={DividerChoices.Vertical} padding={true} />
            <div className={styles.section}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        My Skill
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.title}>
                        My Skills
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;