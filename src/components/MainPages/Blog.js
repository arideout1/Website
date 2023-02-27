import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import JackHammer from "../../images/jackhammer.png"
import ComingSoon from '../Utils/ComingSoon';
import styles from "./Blog.module.css"
import Leaves from "../../images/leaves.jpg"
import Yellow from "../../images/yellowplant.jpg"
import Clouds from "../../images/clouds.png"
import Divider from '../Utils/Divider';
import Button from '../Utils/Button';
import { Blog1Text } from '../../utils/Strings';
import { DividerChoices } from '../Utils/Divider';
import ExampleSwiper from '../Swipers/ExampleSwiper';
import { AbMissionFast } from '../../utils/Strings';

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