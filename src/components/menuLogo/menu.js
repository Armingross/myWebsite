import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Menu({menuState, setMenuState, navigatetoPage}) {

    const menuScreenVariant = {
        hidden: { x: "100vw" },
        show: { x: 0,
                transition: {
                    type: "tween",
                    duration: 0.5
                }},
        hiddenAgain: { x: "100vw",
                        transition: {
                            type: "tween",
                            duration: 0.5
                        }
        }
    }

    return(
        <AnimatePresence>
            {menuState && (
                <div className="menuScreenBox">
                    <motion.div style={{height:"100%"}}
                    variants={menuScreenVariant}
                    initial="hidden"
                    animate="show"
                    exit="hiddenAgain">
                        <div className="menuScreen">
                            <ArrowBackIcon className="arrowIcon" onClick={() => {setMenuState(false)}} sx={{fontSize: "40px"}}/>
                            <p className="menuItems" onClick={() => navigatetoPage("aboutme")}>About Me</p>
                            <p className="menuItems" onClick={() => navigatetoPage("resume")}>Resume</p>
                            <p className="menuItems" onClick={() => navigatetoPage("contactme")}>Contact Me</p>
                        </div>
                    </motion.div>
                </div>
                )
            }
        </AnimatePresence>
    )
}