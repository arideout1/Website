import React, { useState } from 'react';
import styles from './About.module.css';
import Divider from '../Utils/Divider';
import { DividerChoices } from '../Utils/Divider';

function About() {

    return (
        <div className={styles.sections}>
            <div className={styles.section}>
                <div className={styles.title}>
                    My Mission
                </div>
            </div>
            <Divider direction={DividerChoices.Vertical} padding={true} />
            <div className={styles.section}>
                <div className={styles.title}>
                    My Background
                </div>
            </div>
            <Divider direction={DividerChoices.Vertical} padding={true} />
            <div className={styles.section}>
                <div className={styles.title}>
                    My Skills
                </div>
            </div>
        </div>
    )
}

export default About;