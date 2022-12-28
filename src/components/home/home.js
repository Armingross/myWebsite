import React, { useState } from "react"
import styles from "./home.css"
import { Typography, useMediaQuery, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from "framer-motion"
import MenuLogo from "../menuLogo/menuLogo.js"
import { useNavigate, useLocation } from 'react-router-dom';
import {useEffect} from 'react';

export default function Home(){
    <link rel="stylesheet" href="home.css"/>

    const smallSize = useMediaQuery("@media screen and (max-width: 900px)")
    let navigate = useNavigate();

    /* delaytime which decides if animation has delay or not */
    let delayTime;
    let sessionCounter = sessionStorage.getItem("animation")
    if(sessionCounter <= 1){
        delayTime = 3;
        sessionStorage.setItem("animation", sessionCounter+1)
    }else{
        delayTime = 0;
    }

    const pageVariant = {
        hidden: { opacity: 0, },
        show: { opacity: 1 },
        exit: { opacity: 0 }
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
        hidden: { height:"200px", border: 0},
        show: { height:"350px", border: 0,
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
        navigate("/aboutme")
    }
    

    return(
        <>
            <MenuLogo delayTime={delayTime}/>
            <div className="display">
                <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
                    {/*white box*/}
                    <motion.div className="centerBox" variants={centerBoxVariant} initial="hidden" animate="show">
                        <motion.p className="greeting" id="greetingMyName" variants={textVariant}>
                            Hi, I'm
                        </motion.p>
                        <motion.p className="myName" id="greetingMyName" variants={textVariant}>
                            Armin Gross
                        </motion.p>
                        <motion.button className="knowMeBtn"
                        variants={buttonVariant}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}>
                            Get to know me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}