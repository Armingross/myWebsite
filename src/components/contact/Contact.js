import styles from "../myWebsite.css"
import MenuLogo from "../menuLogo/menuLogo.js"
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"

export default function Contact(){
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
    
    return(
        <div className="display">
            <MenuLogo page={page}></MenuLogo>
            <div className="centerBoxContact">
                <div className="socialMediaBox">
                    <motion.div className="textIcon" whileHover={{ scale: 1.1 }}>
                        <InstagramIcon/>
                        <motion.a href="https://www.instagram.com/aregross" className="socialMediaText">
                            Instagram
                        </motion.a>
                    </motion.div>
                    <motion.div className="textIcon" whileHover={{ scale: 1.1 }}>
                        <MailOutlineIcon/>
                        <motion.a href="https://www.instagram.com/aregross" className="socialMediaText">
                            Mail
                        </motion.a>
                    </motion.div>
                    <motion.div className="textIcon" whileHover={{ scale: 1.1 }}>
                        <GitHubIcon/>
                        <motion.a href="https://www.instagram.com/aregross" className="socialMediaText">
                            GitHub
                        </motion.a>
                    </motion.div>
                </div>
                <motion.a
                className="downloadResumeBtn"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                whileTap={{ scale: 0.95 }}
                href="Resume/Resume.zip"
                download>
                    Download Resume
                </motion.a>
            </div> 
        </div>
    )    
}