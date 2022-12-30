import React, { useState } from "react"
import { Typography, useMediaQuery, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import Menu from "./menu.js"
import { useNavigate } from "react-router-dom";

export default function MenuLogo({delayTime, page}) {

    const smallSize = useMediaQuery("@media screen and (max-width: 900px)")
    let navigate = useNavigate();
    const [menuState, setMenuState] = useState(false)

    let btnStyle = ["aboutme", "resume", "contact"];
    btnStyle[page] = { color: "rgba(255, 255, 255, 0.6)", borderColor: "rgba(255, 255, 255, 0.6)" }

    let hover = ["aboutme", "resume", "contact"];
    hover["aboutme"] = hover["resume"] = hover["contact"] = { scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.354)" };
    hover[page] = { scale: 1, backgroundColor: "rgba(0, 0, 0, 0)" };

    let btnDisable = ["aboutme", "resume", "contact"];
    btnDisable["aboutme"] = btnDisable["resume"] = btnDisable["contact"] = false;
    btnDisable[page] = true;

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

    function navigatetoPage(whereTo){
        navigate("/"+whereTo)
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
                    <motion.button className="menuButton" disabled={btnDisable["aboutme"]} style={btnStyle["aboutme"]} onClick={() => navigatetoPage("aboutme")} variants={menuButtonVariant} whileHover={hover["aboutme"]}>
                        About Me
                    </motion.button>
                    {/* middle Button */}
                    <motion.button className="menuButton" disabled={btnDisable["resume"]} style={btnStyle["resume"]} onClick={() => navigatetoPage("resume")} variants={menuButtonVariant} whileHover={hover["resume"]}>
                        Resume
                    </motion.button>
                    {/* right Button */}
                    <motion.button className="menuButton" disabled={btnDisable["contact"]} style={btnStyle["contact"]} onClick={() => navigatetoPage("contact")} variants={menuButtonVariant} whileHover={hover["contact"]}>
                        Contact
                    </motion.button>
        </motion.div>
        )

    return(
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} navigatetoPage={navigatetoPage}/>
            {/*logo div*/}
            <motion.div className="logoBox"
                variants={logoVariant}
                initial="hidden"
                animate="show"
                whileHover="hover"
                onClick={() => navigatetoPage("")}
                >
                    <Typography className="logoText" onClick={() => navigatetoPage("aboutme")}>A|G</Typography>                    
            </motion.div>
            {/*div for menu buttons*/}
            {menuBox}
        </>
    )
}