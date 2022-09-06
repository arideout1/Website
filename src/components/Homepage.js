import React from 'react';
import Portrait from '../portrait-wide.jpg';
import styles from './Homepage.module.css';

function Homepage() {

    return (<div>
        <img className={styles.picture} src={Portrait} />
        <div className={styles.test}>
            Test
        </div>
    </div>)
}

export default Homepage;