import styles from "../myWebsite.css"
import MenuLogo from "../menuLogo/menuLogo.js"
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"
import { BgImages } from "../backgroundImages/BgImages"
import { useState } from "react";
import resume from "../Resume/Armin_Gross.pdf"

export default function Contact(){
    /* img state which is default low storage and changes when normal img is loaded */
    const [imgSrc, setImgSrc] = useState("img/bg/onRight/onRightBlur.png")

    /* delaytime to give it to <MenuLogo> */
    let delayTime = 0;

    /* page is for MenuLogo so that i know which button should be disactivated */
    const page = "contact"

    const buttonVariant = {
        hidden: { scale: 1 },
        show: { scale: 1.08,
            transition: {
                scale: { duration: 0.7, repeat: Infinity, repeatType: "reverse" }
            },
        }
    }

    const pageVariant = {
        hidden: { opacity: 0, },
        show: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const bgImg = BgImages(page)
    const imgLoaded = () => {
        setImgSrc(bgImg)
    }
    
    return(
        <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
            <img className="backgroundImg" src={imgSrc}
                alt="picture of me on the side of a Street"
            />
            {/* this img is not visible its just so that it can load and
            when its loaded the upper img is gonna be this one */}
            <img src={BgImages(page)} onLoad={imgLoaded} hidden></img>
            <div className="flexCentered display">
                <MenuLogo delayTime={delayTime} page={page}/>
                <div className="centerBox">
                    <div className="flexCentered socialMediaBox" style={{width:"100%"}}>
                        <motion.div className="flexCentered text-and-Icon" whileHover={{ scale: 1.1 }}>
                            <InstagramIcon/>
                            <motion.a href="https://www.instagram.com/aregross" target="to _blank" className="text socialMediaText">
                                Instagram
                            </motion.a>
                        </motion.div>
                        <motion.div className="flexCentered text-and-Icon" whileHover={{ scale: 1.1 }}>
                            <MailOutlineIcon/>
                            <motion.a href="mailto:armingross01@gmail.com" target="to _blank" className="text socialMediaText">
                                Mail
                            </motion.a>
                        </motion.div>
                        <motion.div className="flexCentered text-and-Icon" whileHover={{ scale: 1.1 }}>
                            <GitHubIcon/>
                            <motion.a href="https://github.com/Armingross" target="to _blank" className="text socialMediaText">
                                GitHub
                            </motion.a>
                        </motion.div>
                    </div>
                    <motion.a
                    className="text centerBox-button flexCentered centerBox-button-Contact"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    whileTap={{ scale: 0.95 }}
                    href={resume}
                    download="Resume">
                        Download Resume
                    </motion.a>
                </div> 
            </div>
        </motion.div>
    )    
}