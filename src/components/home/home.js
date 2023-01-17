import React, { useState } from "react"
import styles from "../myWebsite.css"
import { useMediaQuery, } from '@mui/material'
import { motion } from "framer-motion"
import MenuLogo from "../menuLogo/menuLogo.js"
import { useNavigate } from "react-router-dom";

export default function Home(){
    <link rel="stylesheet" href="home.css"/>

    let navigate = useNavigate();
    /* page is for MenuLogo so that i know which button should be disactivated */
    const page = "home";

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

    const smallSize = useMediaQuery("@media screen and (max-width: 900px)")
    const centerBoxVariant = smallSize
    ? {
        hidden: { height:"200px", boxShadow: 0},
        show: { height:"350px", boxShadow: 0,
            transition: {
                delay: delayTime
            },
        }
    }
    : {
        hidden: { width:"500px", height:"300px", boxShadow: 0},
        show: { width:"800px", height:"500px", boxShadow: "0px 0px 29px 7px rgba(0,0,0,0.2)",
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
        hidden: { opacity: 0, scale: 1 },
        show: { opacity: 1, scale: 1.1,
            transition: {
                opacity: { delay: delayTime },
                scale: { duration: 0.7, repeat: Infinity, repeatType: "reverse" }
            },
        }
    }
       

    return(
        <motion.div className="display" variants={pageVariant} initial="hidden" animate="show" exit="exit">
            <MenuLogo delayTime={delayTime} page={page}/>
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
                    whileTap={{ scale: 0.8 }}
                    onClick={() => navigate("aboutme")}>
                        Get to know me
                    </motion.button>
                </motion.div>
        </motion.div>
    )
}