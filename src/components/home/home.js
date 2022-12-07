import React from "react"
import styles from "./home.css"
import { Typography, Box, Button, } from '@mui/material'
import { motion } from "framer-motion"

export default function Home(){
    <link rel="stylesheet" href="home.css"/>

    const duration = 2.5;
    const buttonScale = 1.1;

    const logoVariant = {
        hidden: { x: -100 },
        show: { x: 0,
                transition: {
                    type: "tween",
                    delay: duration
                }},
        hover: { scale: buttonScale }
    }

    const menuVariant = {
        hidden: { x: 0 },
        show: { x: 0,
                transition: {
                    delay: duration,   
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

    const centerBoxVariant = {
        hidden: { scale: 0.6, border: 0},
        show: { scale: 1, border: "3px solid white",
                transition: {
                    delay: duration
                }}
    }

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        show: {y: 0, opacity: 1,
            transition: {
                y: { delay: duration },
                opacity: { duration: 1 }
                }
            }
        }

    const buttonVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
            transition: {
                delay: duration
            }}
    }

    return(
        <div class="display">
                {/*logo div*/}
                <motion.div class="logoBox"
                variants={logoVariant}
                initial="hidden"
                animate="show"
                whileHover="hover">
                    <Typography class="logoText">A|G</Typography>                    
                </motion.div>
                {/*div for menu buttons*/}
                <motion.div class="menuBox"
                variants={menuVariant}
                initial="hidden"
                animate="show">
                    {/* left Button */}
                    <motion.button class="menuButton" variants={menuButtonVariant} whileHover={{ scale:buttonScale }}>
                        About Me
                    </motion.button>
                    {/* middle Button */}
                    <motion.button class="menuButton" variants={menuButtonVariant} whileHover={{ scale:buttonScale }}>
                        Resume
                    </motion.button>
                    {/* right Button */}
                    <motion.button class="menuButton" variants={menuButtonVariant} whileHover={{ scale:buttonScale }}>
                        Contact
                    </motion.button>
                </motion.div>
            {/*white box*/}
            <motion.div class="textBtnBox" variants={centerBoxVariant} initial="hidden" animate="show">
                <motion.p class="greeting" id="greetingMyName" variants={textVariant}>
                    Hi, I'm
                </motion.p>
                <motion.p class="myName" id="greetingMyName" variants={textVariant}>
                    Armin Gross
                </motion.p>
                <motion.button class="knowMeBtn"
                variants={buttonVariant}
                whileHover={{ scale: buttonScale }}
                whileTap={{ scale: 0.8 }}>
                    Get to know me
                </motion.button>
            </motion.div>
        </div>
    )
}