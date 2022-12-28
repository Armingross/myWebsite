import React, { useState } from "react"
import { Typography, useMediaQuery, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import Menu from "./menu.js"
import { useNavigate } from "react-router-dom";

export default function MenuLogo({delayTime}) {

    const smallSize = useMediaQuery("@media screen and (max-width: 900px)")
    let navigate = useNavigate();
    const [menuState, setMenuState] = useState(false)    

    const logoVariant = {
        hidden: { x: "-100vw" },
        show: { x: 0,
                transition: {
                    type: "tween",
                    delay: delayTime
                }},
        hover: { scale: 1.1 }
    }

    const menuIconVariant = {
        hidden: { x: "100vw" },
        show: { x: 0,
                transition: {
                    type: "tween",
                    delay: delayTime
                }}
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

    const navigateAboutMe = () => {
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
                    <motion.button className="menuButton" onClick={navigateAboutMe} variants={menuButtonVariant} whileHover={{ scale:1.1 }}>
                        About Me
                    </motion.button>
                    {/* middle Button */}
                    <motion.button className="menuButton" variants={menuButtonVariant} whileHover={{ scale:1.1 }}>
                        Resume
                    </motion.button>
                    {/* right Button */}
                    <motion.button className="menuButton" variants={menuButtonVariant} whileHover={{ scale:1.1 }}>
                        Contact
                    </motion.button>
        </motion.div>
        )

    return(
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} navigateAboutMe={navigateAboutMe}/>
            {/*logo div*/}
            <motion.div className="logoBox"
                variants={logoVariant}
                initial="hidden"
                animate="show"
                whileHover="hover"
                >
                    <Typography className="logoText">A|G</Typography>                    
            </motion.div>
            {/*div for menu buttons*/}
            {menuBox}
        </>
    )
}