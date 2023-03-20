import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import styles from "./Blog.module.css"
import Clouds from "../../images/clouds.png"
import Divider from '../Utils/Divider';
import Button from '../Utils/Button';
import { Blog1Text, Blog2Text } from '../../utils/Strings';
import { DividerChoices } from '../Utils/Divider';

const Blog1 =
    < div className={styles.section} >
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                Blog #1: React Components
            </div>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.body}>
                {Blog1Text}
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.centerButton}>
                    <Button icon="react" iconType="svg" to="/blog/1/" buttonText="Learn More" />
                </div>
            </div>
        </div>
    </div >

const Blog2 =
    < div className={styles.section} >
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                Blog #2: Redux Part 1
            </div>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.body}>
                {Blog2Text}
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.centerButton}>
                    <Button to="/blog/1/" buttonText="Learn More" />
                </div>
            </div>
        </div>
    </div >


function Blog() {
    return (<div>
        <Parallax pages={4}>
            <ParallaxLayer
                speed={0.1}
                style={{
                    backgroundImage: `url(${Clouds})`,
                    backgroundSize: 'cover',
                }}
                factor={3}
            >
            </ParallaxLayer>
            <ParallaxLayer
                speed={1}
            >
                <div>{Blog1}</div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.1}
                style={{
                    backgroundImage: `url(${Clouds})`,
                    backgroundSize: 'cover',
                }}
                factor={3}
            >

            </ParallaxLayer>
            <ParallaxLayer
                offset={0.7}
                speed={1}
            >
                <div>{Blog1}</div>
            </ParallaxLayer>
        </Parallax>
    </div >)
}

export default Blog;