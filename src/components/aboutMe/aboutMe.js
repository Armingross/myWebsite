import React from "react"
import styles from "./aboutMe.css"
import { Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Opacity } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';

export default function Home(){
    <link rel="stylesheet" href="aboutMe.css"/>

    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1],["0","-100%"]);

    let navigate = useNavigate();

    const pageVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
                transition: {
                }
            },
        exit: { opacity: 0,
                transition: {
                }
            }
    }

    const navigateHome = () => {
        navigate("/")
    }

    return(
        <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit" className="aboutMedisplay">
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
                <div id="firstPageTextBox">
                    <p className="text">I'm from Sarnthein</p>
                </div>
                {/* Picture */}
                <img src="img/sarnthein.jpg" alt="picture of Sarnthein" className="firstPagePicture"/>
            </div>

            {/* Second Page */}
            <div className="page" id="secondPage">
                {/* Text Box */}
                <div className="secondPageTextBox">
                    <p className="text">Which is Located</p>
                    <p className="text">in the North</p>
                    <p className="text">of Italy</p>
                </div>
                {/* Picture Box */}
                <video className="secondPageVideo" autoPlay muted>
                    <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                </video>
            </div>

            {/* Third Page */}
            <div className="page" id="thirdPage">
                <div className="thridTextPictureBox">
                    <div id="thirdTextBox">
                        <p className="text">I like Hiking...</p>
                    </div>
                    <img src="img/jakobsSpitzePanorama.jpg" alt="picture of a Tent" className="thirdPictureTwo"/>
                </div>
                <img src="img/hikingTent.jpg" alt="picture of a Tent" className="thirdPictureOne"/>
            </div>

            {/* Traveling page */}
            <div className="page" id="fourthPage">
                <img src="img/grandCanyon.jpg" alt="picture of me at the Grand Canyon" className="fourthPictureOne"/>
                <div id="FourthTextPictureBox">
                    <div id="fourthTextBox">
                            <p className="text">Traveling...</p>
                    </div>
                    <img src="img/newYork.jpg" alt="picture of the New York Skyline" className="fourthPictureTwo"/>
                </div>
                <img src="img/goldenGate.jpg" alt="picture of me in front of the golden Gate Bridge" className="travelPictureTwo"/>
            </div>   

            {/* Fifth page */}
            <div className="page" id="fifthPage">
                <img src="img/gym.png" alt="picture of me playing volleyball" className="sportPictureOne"/>
                <div>
                    <p className="text">Sport...</p>
                </div>
                <img src="img/volleyball.jpg" alt="picture of me in the gym" className="sportPictureTwo"/>
            </div> 

            {/* Sixth page */}
            <div className="page" id="sixthPage">
                <div>
                    <p className="text">and of course...</p>
                </div>
            </div>

            {/* Programming page */}
            <div className="page" id="seventhPage">
                <div>
                    <p className="text">Programming</p>
                </div>
                <div className="programmingPicture">

                </div>
                {/* <img src="img/volleyball.jpg" alt="picture of me programming" className="programmingPicture"/> */}
            </div>

        </motion.div>
    )
}