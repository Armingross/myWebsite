import React from "react"
import styles from "./home.css"
import { Typography, Box, Button, } from '@mui/material'
import { motion } from "framer-motion"

export default function Home(){
    <link rel="stylesheet" href="home.css"/>

    const menuLogoBoxButtonAppear = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
            transition: {
                delay: 2
            } }
    }

    const textBtnBoxBorderAppear = {
        hidden: { border: "none" },
        show: { border: "3px solid white",
            transition: {
                delay: 2
            }
        }
    }

    const jumpToLeft = {
        center: { position: "absolute", fontSize: "100px" },
        static: { position: "static", fontSize: "50px",
                transition: {
                    delay: 2.5,
                    duration: 5
                }
            }
        } 

    const textAppear = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    return(
        <div class="display">
            <motion.div variants={menuLogoBoxButtonAppear} initial="hidden" animate="show" class="menuLogoBox"> {/*div for logo div and menu div*/}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 2.5 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="logoBox"> {/*div for log*/}
                    <Typography class="logoText">A|G</Typography>                    
                </motion.div>
                <motion.div class="menuBox"> {/*div for menu buttons*/}
                    <motion.button animate={{ rotate: 360 }} transition={{ duration: 2.5 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="menuButton">About Me</motion.button>
                    <motion.button animate={{ rotate: 360 }} transition={{ duration: 2.5 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="menuButton">Resume</motion.button>
                    <motion.button animate={{ rotate: 360 }} transition={{ duration: 2.5 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="menuButton">Contact</motion.button>
                </motion.div>
            </motion.div>
            <motion.div variants={textBtnBoxBorderAppear} initial="hidden" animate="show" class="textButtonBox">{/*white box*/}
                <motion.p variants={textAppear} initial="hidden" animate="show" class="greeting" id="greetingMyName">Hi, I'm</motion.p>
                <motion.p variants={textAppear} initial="hidden" animate="show" class="myName" id="greetingMyName">Armin Gross</motion.p>
                <motion.button variants={menuLogoBoxButtonAppear} initial="hidden" animate="show" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="knowMeBtn">Get to know me</motion.button>
            </motion.div>
        </div>
    )
}