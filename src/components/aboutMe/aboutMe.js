import React from "react"
import styles from "./aboutMe.css"
import { Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Opacity } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';

export default function Home(){
    <link rel="stylesheet" href="aboutMe.css"/>

    /* let { scrollY } = useScroll();
    let yUp = useTransform(scrollY, [1700, 10000],["0","-100%"]);
    let yDown = useTransform(scrollY, [1500, 4000],["0","100%"]); */
    let { scrollYProgress } = useScroll();
    let yImg = useTransform(scrollYProgress, [0, 1],["0","-100%"]);
    let yText = useTransform(scrollYProgress, [0, 1],["0","-70%"]);
    let yVideoText = useTransform(scrollYProgress, [0, 1],["-50","0%"]);

    let navigate = useNavigate();

    const pageVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const navigateHome = () => {
        navigate("/")
    }

    return(
        <div className="aboutMedisplay">
            <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
                {/* Logo in left up Corner */}
                <div className="logoBox">
                    <Typography className="logoText">A|G</Typography>                    
                </div>
                {/* Menu in right up corner */}
                <div className="menuBox">
                        {/* left Button */}
                        <button className="menuButton" onClick={navigateHome}>
                            Home
                        </button>
                        {/* middle Button */}
                        <button className="menuButton">
                            Resume
                        </button>
                        {/* right Button */}
                        <button className="menuButton">
                            Contact
                        </button>
                </div>

                {/* First Page */}
                <div className="page" id="firstPage">
                    {/* Text Box */}
                    <motion.div style={{ y: yText }} id="firstPageTextBox">
                        <p className="text">I'm from Sarnthein</p>
                    </motion.div>
                    {/* div which hides overflow */}
                    <motion.div style={{ y: yImg }} className="firstPagePictureDiv">
                        {/* Picture */}
                        <img src="img/sarnthein.jpg" alt="picture of Sarnthein"/>
                    </motion.div>
                </div>

                {/* Second Page */}
                <div className="page" id="secondPage">
                    {/* Text Box */}
                    <motion.div style={{ y: yVideoText }} className="secondPageTextBox">
                        <p className="text">Which is Located</p>
                        <p className="text">in the North</p>
                        <p className="text">of Italy</p>
                    </motion.div>
                    {/* Picture Box */}
                    <motion.div style={{ y: yImg }} className="secondPageVideoDiv">
                        <video onClick={e => e.target.play()} autoPlay muted>
                            <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                        </video>
                    </motion.div>
                </div>

                {/* Third Page */}
                <div className="page" id="thirdPage">
                    <div className="thridTextPictureBox">
                        <motion.div style={{ y: yText }} id="thirdTextBox">
                            <p className="text">I like Hiking...</p>
                        </motion.div>
                        <motion.div style={{ y: yImg }} className="thirdPictureTwoDiv">
                            <img src="img/jakobsSpitzePanorama.jpg" alt="picture of a Tent" className="thirdPictureTwo"/>
                        </motion.div>
                    </div>
                    <motion.div style={{ y: yImg }} className="thirdPictureOneDiv">
                        <img src="img/hikingTent.jpg" alt="picture of a Tent" className="thirdPictureOne"/>
                    </motion.div>
                </div>

                {/* Traveling page */}
                <div className="page" id="fourthPage">
                    <motion.div style={{ y: yImg }} className="fourthPictures">
                        <img src="img/grandCanyon.jpg" alt="picture of me at the Grand Canyon" className="fourthPictureOne"/>
                    </motion.div>
                    <div id="FourthTextPictureBox">
                        <motion.div style={{ y: yText }} id="fourthTextBox">
                                <p className="text">Traveling...</p>
                        </motion.div>
                        <motion.div style={{ y: yImg }} className="fourthPictures">
                            <img src="img/newYork.jpg" alt="picture of the New York Skyline" className="fourthPictureTwo"/>
                        </motion.div>
                    </div>
                    <motion.div style={{ y: yImg }} className="fourthPictures">
                        <img src="img/goldenGate.jpg" alt="picture of me in front of the golden Gate Bridge" className="fourthPictureThree"/>
                    </motion.div>
                </div>   

                {/* Fifth page */}
                <div className="page" id="fifthPage">
                    <motion.div style={{ y: yImg }} className="fifthPictures">
                        <img src="img/gym.png" alt="picture of me playing volleyball" className="fifthPictureOne"/>
                    </motion.div>
                    <motion.div style={{ y: yText }}>
                        <p className="text">Sport...</p>
                    </motion.div>
                    <motion.div style={{ y: yImg }} className="fifthPictures">
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
                    <motion.div style={{ y: yText }} >
                        <p className="text">Programming</p>
                    </motion.div>
                    <motion.div style={{ y: yImg }} className="programmingPicture">

                    </motion.div>
                    {/* <img src="img/volleyball.jpg" alt="picture of me programming" className="programmingPicture"/> */}
                </div>
            </motion.div>
        </div>
    )
}