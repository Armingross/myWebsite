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

    let btnStyle = ["home", "aboutme", "contact"];
    btnStyle[page] = { color: "rgba(255, 255, 255, 0.6)", borderColor: "rgba(255, 255, 255, 0.6)", cursor: "auto" }

    let hover = ["home", "aboutme", "contact"];
    hover["home"] = hover["aboutme"] = hover["contact"] = { scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.354)" };
    hover[page] = { scale: 1, backgroundColor: "rgba(0, 0, 0, 0)" };

    let btnDisable = ["home", "aboutme", "contact"];
    btnDisable["home"] = btnDisable["aboutme"] = btnDisable["contact"] = false;
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

    const menuButtonsBox = smallSize
    ? (
        /* Menu icon Box */
        <div className="menuButtons-Box">
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
        <motion.div className="menuButtons-Box"
                variants={menuVariant}
                initial="hidden"
                animate="show">
                    {/* left Button */}
                    <motion.button
                    disabled={btnDisable["home"]}
                    style={btnStyle["home"]}
                    onClick={() => navigatetoPage("")}
                    variants={menuButtonVariant}
                    whileHover={hover["home"]}>
                        Home
                    </motion.button>
                    {/* middle Button */}
                    <motion.button
                    disabled={btnDisable["aboutme"]}
                    style={btnStyle["aboutme"]}
                    onClick={() => navigatetoPage("aboutme")}
                    variants={menuButtonVariant}
                    whileHover={hover["aboutme"]}>
                        About Me
                    </motion.button>
                    {/* right Button */}
                    <motion.button
                    disabled={btnDisable["contact"]}
                    style={btnStyle["contact"]}
                    onClick={() => navigatetoPage("contact")}
                    variants={menuButtonVariant}
                    whileHover={hover["contact"]}>
                        Contact
                    </motion.button>
        </motion.div>
        )

    return(
        <div>
            <Menu menuState={menuState} setMenuState={setMenuState} navigatetoPage={navigatetoPage}/>
            {/*logo div*/}
            <motion.div className="flexCentered logo"
                variants={logoVariant}
                initial="hidden"
                animate="show"
                whileHover="hover"
                onClick={() => navigatetoPage("")}>
                    <Typography className="logoText">A|G</Typography>                    
            </motion.div>
            {menuButtonsBox}
        </div>
    )
}