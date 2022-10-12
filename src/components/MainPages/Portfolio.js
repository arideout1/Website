import React from 'react';
import styles from './Portfolio.module.css'
import Portrait from '../../portrait-wide.jpg';
import Ptlogo from '../../ptlogo.png'
import IHAlogo from '../../ihalogo.jpg';
import Ekologo from "../../EkoLogo.jpg";
import CoreMLLogo from "../../core-mlpng.png"
import PandasLogo from "../../Pandas_logo.svg.png"
import ReduxLogo from "../../icons8-redux.svg"
import BlueprintLogo from "../../blueprint-seeklogo.com.svg"
import DjangoLogo from "../../django.svg"
import TensorFlowLogo from "../../Tensorflow_logo.svg.png"
import UnlockLogo from "../../unlock.png"
import MetamaskLogo from "../../MetaMask_Fox.svg.png"
import VercelLogo from "../../logo-vercel.svg"
import DockerLogo from "../../docker.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from 'swiper';
import useWindowDimensions from '../../hooks/WindowDimension';

function Portfolio() {

    const { height, width } = useWindowDimensions();

    const portFolioSwiper = {

    }

    return (
        <div>
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
                                        <a className={styles.aTag} target="_blank" href="https://www.docker.com/">
                                            <button className={styles.techButton}>
                                                <div>Docker</div>
                                                <img className={styles.logo} src={DockerLogo} alt="Docker Logo" />
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
                                        <a target="_blank" href="https://github.com/arideout1/website">
                                            <FontAwesomeIcon className={styles.mediaIcon} icon={faGithub} />
                                        </a>
                                    </div>
                                    <div className={styles.nameProfession}>
                                        <span className={styles.name}>Adam Rideout</span>
                                        <span className={styles.profession}>Web Developer: This website</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://www.adamrideout.net/">
                                            <button className={`${styles.button} ${styles.aboutMe}`}>About Me</button>
                                        </a>
                                        <Link style={{ textDecoration: 'none' }} to={"website"} >
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
                                        <a className={styles.aTag} target="_blank" href="https://vercel.com/">
                                            <button className={styles.techButton}>
                                                <div>Vercel</div>
                                                <img className={styles.logo} src={VercelLogo} alt="Vercel Logo" />
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
                                        <img className={styles.img} src={Ekologo} alt="" ></img>
                                    </div>
                                    <div className={styles.mediaIcons}>
                                    </div>
                                    <div className={styles.nameProfession}>
                                        <span className={styles.name}>Eko Health</span>
                                        <span className={styles.profession}>Data Science Intern</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://www.ekohealth.com/"><button className={`${styles.button} ${styles.aboutMe}`}>Background</button></a>
                                        <Link style={{ textDecoration: 'none' }} to={"eko"} >
                                            <button className={`${styles.button} ${styles.hireMe}`}>Project Page</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.tech}>
                                    <div>
                                        Top Technologies Used
                                    </div>
                                    <div className={styles.techButtons} >
                                        <a className={styles.aTag} target="_blank" href="https://www.tensorflow.org/">
                                            <button className={`${styles.techButton} ${styles.react}`}>
                                                <div>TensorFlow</div>
                                                <img className={styles.logo} src={TensorFlowLogo} alt="TensorFlow Logo" />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://www.developer.apple.com/documentation/coreml">
                                            <button className={styles.techButton}>
                                                <div>CoreML</div>
                                                <img className={styles.logo} src={CoreMLLogo} alt="CoreML Logo" />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://pandas.pydata.org/">
                                            <button className={styles.techButton}>
                                                <div>Pandas</div>
                                                <img className={styles.logo} src={PandasLogo} alt="Pandas Logo" />
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
                                        <img className={styles.img} src={UnlockLogo} alt="" ></img>
                                    </div>
                                    <div className={styles.mediaIcons}>
                                        <a target="_blank" href="https://github.com/raid-guild/headline">
                                            <FontAwesomeIcon className={styles.mediaIcon} icon={faGithub} />
                                        </a>
                                    </div>
                                    <div className={styles.nameProfession}>
                                        <span className={styles.name}>Unlock: Headline (via Raid Guild)</span>
                                        <span className={styles.profession}>Frontend Developer</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://viaheadline.xyz/#/"><button className={`${styles.button} ${styles.aboutMe}`}>Background</button></a>
                                        <Link style={{ textDecoration: 'none' }} to={"unlock"} >
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
                                        <a className={styles.aTag} target="_blank" href="https://metamask.io/">
                                            <button className={styles.techButton}>
                                                <div>Metamask</div>
                                                <img className={styles.logo} src={MetamaskLogo} alt="Metamask Logo" />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://redux.js.org/">
                                            <button className={styles.techButton}>
                                                <div>Redux</div>
                                                <img className={styles.logo} src={ReduxLogo} alt="Redux Logo" />
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
                                        <span className={styles.profession}>Full Stack Web Developer: AMP Program</span>
                                    </div>
                                    <div className={styles.buttons} >
                                        <a target="_blank" href="https://iha.org/performance-measurement/amp-program/"><button className={`${styles.button} ${styles.aboutMe}`}>Background</button></a>
                                        <Link style={{ textDecoration: 'none' }} to={"amp"} >
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
                                        <a className={styles.aTag} target="_blank" href="https://www.docker.com/">
                                            <button className={styles.techButton}>
                                                <div>Docker</div>
                                                <img className={styles.logo} src={DockerLogo} alt="Docker Logo" />
                                            </button>
                                        </a>
                                        <a className={styles.aTag} target="_blank" href="https://www.djangoproject.com/">
                                            <button className={styles.techButton}>
                                                <div>Django</div>
                                                <img className={styles.logo} src={DjangoLogo} alt="Django Logo" />
                                            </button>
                                        </a>
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