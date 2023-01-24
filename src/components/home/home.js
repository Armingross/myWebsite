import React, { useState } from "react"
import { useMediaQuery, } from '@mui/material'
import { motion } from "framer-motion"
import MenuLogo from "../menuLogo/menuLogo.js"
import { BgImages } from "../backgroundImages/BgImages"
import { useNavigate } from "react-router-dom";

export default function Home(){    
    /* img state which is default a blur image and changes when right img is loaded */
    const [bgImgSrc, setBgImgSrc] = useState("img/bg/backToCam/backToCamBlur.png")

    let navigate = useNavigate();

    /* page is for MenuLogo so that i know which button should be disactivated */
    const page = "home";

    /* animation delay on first page load */
    let delayTime;
    let sessionCounter = sessionStorage.getItem("animation")
    if(sessionCounter <= 1){
        delayTime = 3;
        sessionStorage.setItem("animation", sessionCounter+1)
    }else{
        delayTime = 0;
    }


    const pageVariant = {
        hidden: { opacity: 0,},
        show: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const screenSmallSize = useMediaQuery("@media screen and (max-width: 900px)")
    const centerBoxVariant = screenSmallSize
    ? {
        hidden: { height:"200px", boxShadow: "none"},
        show: { height:"350px", boxShadow: "none",
            transition: {
                delay: delayTime
            },
        }
    }
    : {
        hidden: { width:"600px", height:"300px", boxShadow: "none"},
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

    const backgroundImgVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
                transition:{
                    delay: delayTime
                }}
    }
       
    const bgImg = BgImages(page)
    const imgLoaded = () => {
        setBgImgSrc(bgImg)
    }

    return(
        <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
            <motion.img className="backgroundImg" src={bgImgSrc} variants={backgroundImgVariant}
            alt="picture of me in front of a long street"
            />
            {/* this img is not visible its just so that it can load it and
            when its loaded the upper img is gonna have the src of this one */}
            <img src={BgImages(page)} onLoad={imgLoaded} hidden/>
            <div className="display">
                <MenuLogo delayTime={delayTime} page={page}/>
                {/*center box*/}
                <motion.div className="centerBox" variants={centerBoxVariant} initial="hidden" animate="show">
                    <div className="textBox-greeting-myName">
                        <motion.p className="text greeting" variants={textVariant}>
                            Hi, my name is
                        </motion.p>
                        <motion.p className="text myName" variants={textVariant}>
                            Armin Gross
                        </motion.p>
                    </div>
                    <motion.button className="text knowMeBtn"
                    variants={buttonVariant}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => navigate("aboutme")}>
                        Get to know me
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    )
}