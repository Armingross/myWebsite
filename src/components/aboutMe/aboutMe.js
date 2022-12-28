import React, { useRef } from "react"
import styles from "./aboutMe.css"
import { Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Opacity } from "@mui/icons-material"
import { useLocation, useNavigate } from 'react-router-dom';
import MenuLogo from "../menuLogo/menuLogo.js"

export default function AboutMe(){
    <link rel="stylesheet" href="aboutMe.css"/>

/* for Parallax effekt, maybe try if i have time left */    
    /* let ref = useRef(null);
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });
    let y = useTransform(scrollYProgress, [0, 1], ["0%","-100%"]);
 */
    
    let navigate = useNavigate();
    const delayTime = 0;

    const pageVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const logoVariant = {
        hidden: { x: "-100vw" },
        show: { x: 0,
                transition: {
                    type: "tween",
                    delay: delayTime
                }},
        hover: { scale: 1.1 }
    }

    const menuVariant = {
        hidden: { x: 0 },
        show: { x: 0,
                transition: {
                    delay: delayTime,   
                    when: "beforeChildren",
                    staggerChildren: 0.2
                }},
    }

    const menuButtonVariant = {
        hidden: { x: "100vw" },
        show: { x: 0,
                transition: {
                    type: "tween"
                }}
    }

    const textVariant = {
        hidden: { y: "-100vh" },
        show: { y: 0,
                transition: {
                    type: "tween",
                    delay: 0.5
                }}
    }

    const pictureVariant = {
        hidden: { y: "100vh" },
        show: { y: 0,
                transition: {
                    type: "tween",
                    delay: 1.5
                }}
    }

    const navigateHome = () => {
        navigate("/")
    }

    return(
        <div className="aboutMedisplay">
            <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
                {/* Logo in left corner and Menu in right corner */}
                <MenuLogo/>
                {/* First Page */}
                <div className="page" id="firstPage">
                    {/* Text Box */}
                    <motion.div id="firstPageTextBox" variants={textVariant} initial="hidden" animate="show">
                        <p className="text">I'm from Sarnthein</p>
                    </motion.div>
                    {/* div which hides overflow */}
                    <motion.div className="firstPagePictureDiv" variants={pictureVariant} initial="hidden" animate="show">
                        {/* Picture */}
                        <img src="img/sarnthein.jpg" alt="picture of Sarnthein"/>
                    </motion.div>
                </div>

                {/* Second Page */}
                <div className="page" id="secondPage">
                    {/* Text Box */}
                    <motion.div className="secondPageTextBox">
                        <p className="text">Which is Located</p>
                        <p className="text">in the North</p>
                        <p className="text">of Italy</p>
                    </motion.div>
                    {/* Picture Box */}
                    <motion.div className="secondPageVideoDiv">
                        <video onClick={e => e.target.play()} autoPlay muted>
                            <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                        </video>
                    </motion.div>
                </div>

                {/* Third Page */}
                <div className="page" id="thirdPage">
                    <div className="thridTextPictureBox">
                        <motion.div id="thirdTextBox">
                            <p className="text">I like Hiking...</p>
                        </motion.div>
                        <motion.div className="thirdPictureTwoDiv">
                            <img src="img/jakobsSpitzePanorama.jpg" alt="picture of a Tent" className="thirdPictureTwo"/>
                        </motion.div>
                    </div>
                    <motion.div className="thirdPictureOneDiv">
                        <img src="img/hikingTent.jpg" alt="picture of a Tent" className="thirdPictureOne"/>
                    </motion.div>
                </div>

                {/* Traveling page */}
                <div className="page" id="fourthPage">
                    <motion.div className="fourthPictures">
                        <img src="img/grandCanyon.jpg" alt="picture of me at the Grand Canyon" className="fourthPictureOne"/>
                    </motion.div>
                    <div id="FourthTextPictureBox">
                        <motion.div id="fourthTextBox">
                                <p className="text">Traveling...</p>
                        </motion.div>
                        <motion.div className="fourthPictures">
                            <img src="img/newYork.jpg" alt="picture of the New York Skyline" className="fourthPictureTwo"/>
                        </motion.div>
                    </div>
                    <motion.div className="fourthPictures">
                        <img src="img/goldenGate.jpg" alt="picture of me in front of the golden Gate Bridge" className="fourthPictureThree"/>
                    </motion.div>
                </div>   

                {/* Fifth page */}
                <div className="page" id="fifthPage">
                    <motion.div className="fifthPictures">
                        <img src="img/gym.png" alt="picture of me playing volleyball" className="fifthPictureOne"/>
                    </motion.div>
                    <motion.div>
                        <p className="text">Sport...</p>
                    </motion.div>
                    <motion.div className="fifthPictures">
                        <img src="img/volleyball.jpg" alt="picture of me in the gym" className="fifthPictureTwo"/>
                    </motion.div>
                </div> 

                {/* Sixth page */}
                <div className="page" id="sixthPage">
                    <motion.div>
                        <p className="text">and of course...</p>
                    </motion.div>
                </div>

                {/* Programming page */}
                <div className="page" id="seventhPage">
                    <motion.div >
                        <p className="text">Programming</p>
                    </motion.div>
                    <motion.div className="programmingPicture">

                    </motion.div>
                    {/* <img src="img/volleyball.jpg" alt="picture of me programming" className="programmingPicture"/> */}
                </div>
            </motion.div>
        </div>
    )
}