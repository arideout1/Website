import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Portrait from '../../portrait-wide.jpg';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


function Contact() {

    const [hasClicked, setClicked] = useState(false);
    const [renderMobile, setRenderMobile] = useState(window.innerWidth < 760);

    useEffect(() => {
        function handleResize() {
            setRenderMobile(window.innerWidth < 760)
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            console.log(renderMobile)
        }
        window.addEventListener('resize', handleResize)
    });

    return (
        <div className={styles.container}>
            <div className={renderMobile ? styles.cardMobile : styles.card}>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img className={styles.img} src={Portrait} alt="" ></img>
                    </div>
                    <div className={styles.mediaIcons}>
                        <a target="_blank" href="https://github.com/arideout1/">
                            <FontAwesomeIcon size='xl' className={styles.mediaIcon} icon={faGithub} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/adam-rideout-505baa127">
                            <FontAwesomeIcon size='xl' className={styles.mediaIcon} icon={faLinkedin} />
                        </a>
                    </div>
                    <div className={styles.nameProfession}>
                        <span className={styles.name}>Adam Rideout</span>
                        <span className={styles.profession}>Frontend Developer</span>
                    </div>
                </div>
                {
                    renderMobile ?
                        <div className={styles.contact}>
                            <a className={styles.aTag} target="_blank" href="mailto:someone@yoursite.com">
                                <button className={styles.contactButtonMobile}>
                                    <div className={styles.inButtonBox}>
                                        <div>Email</div>
                                        <FontAwesomeIcon size={'xl'} className={styles.icon} icon={faEnvelope} />
                                    </div>
                                    <div>
                                        <a href="mailto:someone@yoursite.com">adamrideout@outlook.com</a>
                                    </div>
                                </button>
                            </a>
                            <a className={styles.aTag} target="_blank">
                                <button className={styles.contactButtonMobile} onClick={() => setClicked(true)}>
                                    <div className={styles.inButtonBox}>
                                        <div>Phone</div>
                                        <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faPhone} />
                                    </div>
                                    <div>
                                        (925)683-9985
                                    </div>
                                </button>

                                {hasClicked && <div>
                                    This button doesn't do anything, but its fun to click!
                                </div>}
                            </a>
                            <a className={styles.aTag} target="_blank" href="https://github.com/arideout1/">
                                <button className={styles.contactButtonMobile}>
                                    <div className={styles.inButtonBox}>
                                        <div>GitHub</div>
                                        <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faGithub} />
                                    </div>
                                </button>
                            </a>
                            <a className={styles.aTag} target="_blank" href="https://www.linkedin.com/in/adam-rideout-505baa127">
                                <button className={styles.contactButtonMobile} onClick={() => setClicked(true)}>
                                    <div className={styles.inButtonBox}>
                                        <div>LinkedIn</div>
                                        <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faLinkedin} />
                                    </div>
                                </button>
                            </a>
                        </div>
                        :
                        <div className={styles.contact}>
                            <div className={styles.contactButtons} >
                                <a className={styles.aTag} target="_blank" href="mailto:someone@yoursite.com">
                                    <button className={styles.contactButton}>
                                        <div className={styles.inButtonBox}>
                                            <div>Email</div>
                                            <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faEnvelope} />
                                        </div>
                                        <div>
                                            <a href="mailto:someone@yoursite.com">adamrideout@outlook.com</a>
                                        </div>
                                    </button>
                                </a>
                                <a className={styles.aTag} target="_blank">
                                    <button className={styles.contactButton} onClick={() => setClicked(true)}>
                                        <div className={styles.inButtonBox}>
                                            <div>Phone</div>
                                            <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faPhone} />
                                        </div>
                                        <div>
                                            (925)683-9985
                                        </div>
                                    </button>

                                    {hasClicked && <div>
                                        This button doesn't do anything, but its fun to click!
                                    </div>}
                                </a>
                            </div>
                            <div className={styles.contactButtons} >
                                <a className={styles.aTag} target="_blank" href="https://github.com/arideout1/">
                                    <button className={styles.contactButton}>
                                        <div className={styles.inButtonBox}>
                                            <div>GitHub</div>
                                            <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faGithub} />
                                        </div>
                                    </button>
                                </a>
                                <a className={styles.aTag} target="_blank" href="https://www.linkedin.com/in/adam-rideout-505baa127">
                                    <button className={styles.contactButton} onClick={() => setClicked(true)}>
                                        <div className={styles.inButtonBox}>
                                            <div>LinkedIn</div>
                                            <FontAwesomeIcon size={renderMobile ? "small" : 'xl'} className={styles.icon} icon={faLinkedin} />
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                }
            </div>
        </div>)
}

export default Contact;