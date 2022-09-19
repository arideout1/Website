import React from 'react';
import styles from './Portfolio.module.css'
import Portrait from '../../portrait-wide.jpg';
import Ptlogo from '../../ptlogo.png'
import IHAlogo from '../../ihalogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faReact } from "@fortawesome/free-brands-svg-icons"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from 'swiper';
import ReduxLogo from "../../icons8-redux.svg"
import BlueprintLogo from "../../blueprint-seeklogo.com.svg"
import DjangoLogo from "../../django.svg"
import useWindowDimensions from '../../hooks/WindowDimension';

function Portfolio() {

    const { height, width } = useWindowDimensions();

    return (
        <div className={styles.background}>
            <div className={styles.title}>Portfolio</div>
            <>
                <Swiper
                    slidesPerView={Math.floor(width / 400)}
                    spaceBetween={30}
                    slidesPerGroup={Math.floor(width / 400)}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={`mySwiper ${styles.swiper}`}
                >
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.content}>
                                    <div className={styles.image}>
                                        <img className={styles.img} src={Ptlogo} alt="" ></img>
                                    </div>
                                    <div className={styles.mediaIcons}>
                                    </div>
                                    <div className={styles.nameProfession}>
                                        <span className={styles.name}>Palantir</span>
                                        <span className={styles.profession}>Frontend Web Developer: Gotham</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://www.palantir.com/platforms/gotham/"><button className={`${styles.button} ${styles.aboutMe}`}>Background</button></a>
                                        <Link style={{ textDecoration: 'none' }} to={"palantir"} >
                                            <button className={`${styles.button} ${styles.hireMe}`}>Project Page</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.tech}>
                                    <div>
                                        Top Technologies Used
                                    </div>
                                    <div className={styles.techButtons} >
                                        <a className={styles.aTag} target="_blank" href="https://reactjs.org/">
                                            <button className={`${styles.techButton} ${styles.react}`}>
                                                <div>React</div>
                                                <FontAwesomeIcon className={styles.reactLogo} icon={faReact} />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://redux.js.org/">
                                            <button className={styles.techButton}>
                                                <div>Redux</div>
                                                <img className={styles.logo} src={ReduxLogo} alt="React Logo" />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://blueprintjs.com/">
                                            <button className={styles.techButton}>
                                                <div>Blueprint</div>
                                                <img className={styles.logo} src={BlueprintLogo} alt="React Logo" />
                                            </button>
                                        </a>
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
                                        <img className={styles.img} src={IHAlogo} alt="" ></img>
                                    </div>
                                    <div className={styles.mediaIcons}>
                                    </div>
                                    <div className={styles.nameProfession}>
                                        <span className={styles.name}>Integrated Healthcare Association</span>
                                        <span className={styles.profession}>Full Stack Web Developer: Measure Metadata Service</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://www.iha.org/"><button className={`${styles.button} ${styles.aboutMe}`}>Background</button></a>
                                        <Link style={{ textDecoration: 'none' }} to={"mms"} >
                                            <button className={`${styles.button} ${styles.hireMe}`}>Project Page</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.tech}>
                                    <div>
                                        Top Technologies Used
                                    </div>
                                    <div className={styles.techButtons} >
                                        <a className={styles.aTag} target="_blank" href="https://reactjs.org/">
                                            <button className={`${styles.techButton} ${styles.react}`}>
                                                <div>React</div>
                                                <FontAwesomeIcon className={styles.reactLogo} icon={faReact} />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://www.djangoproject.com/">
                                            <button className={styles.techButton}>
                                                <div>Django</div>
                                                <img className={styles.logo} src={DjangoLogo} alt="Django Logo" />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://redux.js.org/">
                                            <button className={styles.techButton}>
                                                <div>Redux</div>
                                                <img className={styles.logo} src={ReduxLogo} alt="React Logo" />
                                            </button>
                                        </a>
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
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.content}>
                                    <div className={styles.image}>
                                        <img className={styles.img} src={Ptlogo} alt="" ></img>
                                    </div>
                                    <div className={styles.mediaIcons}>
                                        <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                        <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                        <FontAwesomeIcon className={styles.mediaIcon} icon={faFacebook} />
                                    </div>
                                    <div className={styles.nameProfession}>
                                        <span className={styles.name}>Palantir</span>
                                        <span className={styles.profession}>Frontend Web Developer: Gotham</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://www.palantir.com/platforms/gotham/"><button className={`${styles.button} ${styles.aboutMe}`}>Background</button></a>
                                        <Link style={{ textDecoration: 'none' }} to={"palantir"} >
                                            <button className={`${styles.button} ${styles.hireMe}`}>Project Info</button>
                                        </Link>
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
            </>
        </div >)
}

export default Portfolio;