import React from 'react';
import styles from './ExampleSwiperMobile.module.css'
import Cracks from '../../images/cracks.jpg';
import YellowPlant from "../../images/yellowplant.jpg";
import Leaves from "../../images/leaves.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function ExampleSwiperMobile() {
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
                                <img className={styles.img} src={YellowPlant} alt="" ></img>
                            </div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Clicke the arrows</span>
                                <span className={styles.profession}>Or swipe!</span>
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
                                <img className={styles.img} src={Cracks} alt="" ></img>
                            </div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Clicke the arrows</span>
                                <span className={styles.profession}>Or swipe!</span>
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
                                <img className={styles.img} src={Leaves} alt="" ></img>
                            </div>
                            <div className={styles.nameProfession}>
                                <span className={styles.name}>Click the arrows</span>
                                <span className={styles.profession}>Or swipe!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </div >)
}

export default ExampleSwiperMobile;