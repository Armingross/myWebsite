import React, { useState } from "react"
import styles from "./home.css"
import { duration, Typography, useMediaQuery, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import Menu from "./menu.js"
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home(){
    <link rel="stylesheet" href="home.css"/>

    const delayTime = 2.5
    const buttonScale = 1.1

    const smallSize = useMediaQuery("@media screen and (max-width: 900px)")

    const [menuState, setMenuState] = useState(false)
    
    let navigate = useNavigate();

    const logoVariant = {
        hidden: { x: "-100vw" },
        show: { x: 0,
                transition: {
                    type: "tween",
                    delay: delayTime
                }},
        hover: { scale: buttonScale }
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
    
    const menuIconVariant = {
        hidden: { x: "100vw" },
        show: { x: 0,
                transition: {
                    type: "tween",
                    delay: delayTime
                }}
    }

    const centerBoxVariant = smallSize
    ? {
        hidden: { width:"100vw", height:"200px", border: 0},
        show: { width: "100vw", height:"350px", border: 0,
            transition: {
                delay: delayTime
            },
        }
    }
    : {
        hidden: { width:"500px", height:"300px", border: 0},
        show: { width:"800px", height:"500px", border: "3px solid white",
            transition: {
                delay: delayTime
            },
        }
    }

    const textVariant = {
        hidden: { opacity: 0, y: 34 },
        show: {y: 0, opacity: 1,
            transition: {
                y: { delay: delayTime },
                opacity: { delayTime: 1 }
                }
            }
        }

    const buttonVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
            transition: {
                delay: delayTime
            }}
    }

    const navigateAboutMe = () => {
        console.log("huso")
        navigate("/aboutme")
    }

    const menuBox = smallSize
    ? (
        /* Menu icon Box */
        <div className="menuBox">
                    {/* Menu icon */}
                    <motion.div
                        variants={menuIconVariant}
                        initial="hidden"
                        animate="show">
                                <MenuIcon onClick={() => {setMenuState(true)}} sx={{color:"white", fontSize: "55px"}}/>
                    </motion.div>
        </div>
        )
    : (
        <motion.div className="menuBox"
                variants={menuVariant}
                initial="hidden"
                animate="show">
                    {/* left Button */}
                    <motion.button className="menuButton" onClick={navigateAboutMe} variants={menuButtonVariant} whileHover={{ scale:buttonScale }}>
                        About Me
                    </motion.button>
                    {/* middle Button */}
                    <motion.button className="menuButton" variants={menuButtonVariant} whileHover={{ scale:buttonScale }}>
                        Resume
                    </motion.button>
                    {/* right Button */}
                    <motion.button className="menuButton" variants={menuButtonVariant} whileHover={{ scale:buttonScale }}>
                        Contact
                    </motion.button>
                </motion.div>
        )
    

    return(
        <div className="display">
            <Menu menuState={menuState} setMenuState={setMenuState}></Menu>
            {/*logo div*/}
            <motion.div className="logoBox"
            variants={logoVariant}
            initial="hidden"
            animate="show"
            whileHover="hover">
                <Typography className="logoText">A|G</Typography>                    
            </motion.div>
            {/*div for menu buttons*/}
            {menuBox}
            {/*white box*/}
            <motion.div layout className="centerBox" variants={centerBoxVariant} initial="hidden" animate="show">
                <motion.p className="greeting" id="greetingMyName" variants={textVariant}>
                    Hi, I'm
                </motion.p>
                <motion.p className="myName" id="greetingMyName" variants={textVariant}>
                    Armin Gross
                </motion.p>
                <motion.button className="knowMeBtn"
                variants={buttonVariant}
                whileHover={{ scale: buttonScale }}
                whileTap={{ scale: 0.8 }}>
                    Get to know me
                </motion.button>
            </motion.div>
        </div>
    )
}