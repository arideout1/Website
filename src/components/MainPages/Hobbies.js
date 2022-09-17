import React from 'react';
import styles from './Hobbies.module.css'
import Portrait from '../../portrait-wide.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function Hobbies() {
    return (<div>
        <div>Hobbies</div>
        <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
            "clickable": true
        }} navigation={true} className={`mySwiper ${styles.swiper}`}>
            <SwiperSlide>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img className={styles.img} src={Portrait} alt="" ></img>
                            </div>
                            <div className={styles.mediaIcons}>
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                            </div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Someone Name</span>
                                <span className={styles.profession}>Web Developer</span>
                            </div>
                            <div className={styles.buttons} >
                                <button className={`${styles.button} ${styles.aboutMe}`}>About Me 2</button>
                                <button className={`${styles.button} ${styles.hireMe}`}>Hire Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img className={styles.img} src={Portrait} alt="" ></img>
                            </div>
                            <div className={styles.mediaIcons}>
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                            </div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Someone Name</span>
                                <span className={styles.profession}>Web Developer</span>
                            </div>
                            <div className={styles.buttons} >
                                <button className={`${styles.button} ${styles.aboutMe}`}>About Me</button>
                                <button className={`${styles.button} ${styles.hireMe}`}>Hire Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img className={styles.img} src={Portrait} alt="" ></img>
                            </div>
                            <div className={styles.mediaIcons}>
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                            </div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Someone Name</span>
                                <span className={styles.profession}>Web Developer</span>
                            </div>
                            <div className={styles.buttons} >
                                <button className={`${styles.button} ${styles.aboutMe}`}>About Me</button>
                                <button className={`${styles.button} ${styles.hireMe}`}>Hire Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </div >)
}

export default Hobbies;