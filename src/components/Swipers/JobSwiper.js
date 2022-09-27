import React from 'react';
import styles from './JobSwiper.module.css'
import IHA from "../../ihalogo.jpg"
import PLT from "../../ptlogo.png"
import Eko from "../../EkoLogo.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Button from '../Utils/Button';

function JobSwiper() {
    return (<div>
        <Swiper
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            className={`mySwiper ${styles.swiper}`}>
            <SwiperSlide>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img className={styles.img} src={IHA} alt="" ></img>
                            </div>
                            <div className={styles.companyTitle}>Integrated Healthcare Association</div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Software Engineer: Full Stack</span>
                                <span className={styles.profession}>August 2021-Present</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Button buttonText="About IHA" type="a" to="https://iha.org/" size="xs" />
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
                                <img className={styles.img} src={PLT} alt="" ></img>
                            </div>
                            <div className={styles.companyTitle}>Palantir</div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Software Engineer: Frontend</span>
                                <span className={styles.profession}>Aug 2020 - Jul 2021</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Button buttonText="About Palantir" type="a" to="https://www.palantir.com/" size="xs" />
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
                                <img className={styles.img} src={Eko} alt="" ></img>
                            </div>
                            <div className={styles.companyTitle}>Eko Health</div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Data Science and Product R&D Intern</span>
                                <span className={styles.profession}>May 2019 - Aug 2019</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Button buttonText="About Eko" type="a" to="https://www.ekohealth.com/" size="xs" />
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
                                <img className={styles.img} src={Eko} alt="" ></img>
                            </div>
                            <div className={styles.companyTitle}>Eko Health</div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Data Science Intern</span>
                                <span className={styles.profession}>Jun 2018 - Aug 2018</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Button buttonText="About Eko" type="a" to="https://www.ekohealth.com/" size="xs" />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div >)
}

export default JobSwiper;