import React from 'react';
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.background}>
                    <div className={styles.infoContainer}>
                        <div className={styles.contactBox}>
                            <div className={styles.innerBox}>
                                <div className={styles.titleContainer}>
                                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                                    <div className={styles.title}>
                                        Email:
                                    </div>

                                </div>
                                <a href="mailto:someone@yoursite.com">adamrideout@outlook.com</a>
                            </div>
                        </div>
                        <div className={styles.contactBox}>
                            <div className={styles.innerBox}>
                                <div className={styles.titleContainer}>
                                    <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                                    <div className={styles.title}>
                                        Cell Phone:
                                    </div>

                                </div>
                                <div>
                                    (925)683-9985
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Contact;