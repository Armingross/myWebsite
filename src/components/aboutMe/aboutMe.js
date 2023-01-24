import { useState, useRef, useEffect } from "react"
import MenuLogo from "../menuLogo/menuLogo.js"
import styles from "../myWebsite.css"
import { getItems } from "./Items.js"
import { scroll } from "./Scroll.js"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useMediaQuery, } from '@mui/material'
import { motion } from "framer-motion"
import { BgImages } from "../backgroundImages/BgImages"

export default function AboutMe(){
    /* img state which is default low storage and changes when normal img is loaded */
    const [imgSrc, setImgSrc] = useState("img/bg/onLine/onLineBlur.png")

    /* delaytime to give it to <MenuLogo> */
    let delayTime = 0;
    
    /* page is for MenuLogo so that i know which button should be disactivated */
    const page = "aboutme";
    /* a state which every Box in it, which reference to the boxes id */
    const [box, setBox] = useState({
        box1: "active",
        box2: "next",
        box3: "next2",
        box4: "next2",
        box5: "next2",
        box6: "next2"
    });
    /* pointer decides which boxes are visible */
    const [pointer, setPointer] = useState(1);

    /* refrence to the video which plays when "active" */
    const videoPlay = useRef()

    /* all items(images with text, id...) box changes when the box states change */
    const items = getItems(box)

    /* scroll up deacreases pointer by 1 */
    let point;
    const scrollUp = () => {
        if(pointer > 1){
            point = pointer - 1;
        }else{
            point = 1
        }
        setPointer(point);
    }

    /* same as scroll up just increasing the pointer by 1 */
    const scrollDown = () => {
        if(pointer < Object.keys(box).length){
            point = pointer + 1;
        }else{
            point = Object.keys(box).length;
        }
        setPointer(point);
    }

    /* when pointer changes value which happens after scrolldown or scrollup... */
    useEffect(() => {
        /* ...scroll function will be called... */
        scroll(setBox, pointer)
        /* ...and the video will either play or restart and pause */
        if(pointer === 2){
            videoPlay.current.play();
        }else{
            videoPlay.current.currentTime = 0;
            videoPlay.current.pause();
        }
    }, [pointer])

    /* arrows for scrolling up and down the list */
    const smallSize = useMediaQuery("@media screen and (max-width: 900px)");

    const arrowIconStyle = {
        fontSize: "50px",
        marginTop: "20px",
        marginBottom: "20px",
        color: "white",
        cursor: "pointer",
        '@media screen and (max-height: 500px)': {
            fontSize: "10vh"
        },
    }

    const pageVariant = {
        hidden: { opacity: 0, },
        show: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const arrowVariant = {
        hidden: { scale: 1 },
        show: { scale: 1.2,
            transition: {
                duration: 0.7,
                repeat: Infinity,
                repeatType: "reverse"
            },
        }
    }

    let upArrowHidden = false;
    if(pointer === 1) {
        upArrowHidden = true;
    }
    let downArrowHidden = false;
    if(pointer === Object.keys(box).length) {
        downArrowHidden = true;
    }
    
    const bgImg = BgImages(page)
    const imgLoaded = () => {
        setImgSrc(bgImg)
    }

    return(
        <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
            <img className="backgroundImg" src={imgSrc}
                alt="picture of me on the Street Line"
            />
            {/* this img is not visible its just so that it can load and
            when its loaded the upper img is gonna be this one */}
            <img src={BgImages(page)} onLoad={imgLoaded} hidden></img>
            <div className="display displayAboutMe">
                <MenuLogo delayTime={delayTime} page={page}/>
                <ReactScrollWheelHandler
                upHandler={(e) => scrollUp()}
                downHandler={(e) => scrollDown()}
                >
                    <div className="sliderAndArrow">
                    <div className="sliderBox">
                        {items.map((item) => (
                            <div key={item.id} className={item.className} id={item.boxID}>
                                {
                                item.page2 ? (
                                    <>
                                    <div className="pictureBox">
                                        <video ref={videoPlay} muted playsInline className="picture">
                                            <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <div className="textBox">
                                        <p className="text" id={item.textId}>{item.text}</p>
                                        <p className="text" id={item.textId}>{item.text2}</p>
                                    </div>
                                    </>
                                ) : (
                                    <>
                                    <div className="pictureBox">
                                        <img src={item.imgsrc} alt={item.imgalt} className="picture"/>
                                    </div>
                                    <div className="textBox">
                                        <div className="text" id={item.textId}>{item.text}</div>
                                    </div>
                                    </>
                                )
                                }
                            </div>
                        ))}
                    </div>
                        <div className="arrowBox">
                            <div style={{height: "40%", display: "flex", alignItems: "flex-end"}}>
                            <motion.div variants={arrowVariant} initial="hidden" animate="show" hidden={upArrowHidden}>
                                <ArrowUpwardIcon sx={arrowIconStyle} onClick={scrollUp}/>
                            </motion.div>
                            </div>
                            <div style={{height: "40%"}}>
                            <motion.div variants={arrowVariant} initial="hidden" animate="show" hidden={downArrowHidden}>
                                <ArrowDownwardIcon sx={arrowIconStyle} onClick={scrollDown}/>
                            </motion.div>
                            </div>
                        </div>
                    </div>
                </ReactScrollWheelHandler>
            </div>
        </motion.div>
    )
}