import { useState, useRef, useEffect } from "react"
import MenuLogo from "../menuLogo/menuLogo.js"
import styles from "./AboutMe.css"
import { getItems } from "./Items.js"
import { scroll } from "./Scroll.js"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AboutMe(){
    /* a state which every Box in it, which reference to the boxes id */
    const [box, setBox] = useState({
        box1: "active",
        box2: "next",
        box3: "next2",
        box4: "next2",
        box5: "next2",
        box6: "next2"
    })
    /* pointer decides which boxes are visible */
    const [pointer, setPointer] = useState(1)

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
            point = box.length;
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
    const arrowIcon = {
        fontSize: "50px",
        marginTop: "20px",
        marginBottom: "20px",
        color: "white"
    }

    return(
        <div className="display">
            <MenuLogo></MenuLogo>
            <div className="sliderBox">
            {items.map((item) => (
                <div key={item.id} className={item.className} id={item.boxID}>
                        {
                        item.page2 ? (
                            <>
                            <div className="pictureBox">
                                <video ref={videoPlay} muted>
                                    <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                                </video>
                            </div>
                            <div className="textBox">
                                <p className="bothText" id={item.textId}>{item.text}</p>
                                <p className="bothText" id={item.textId}>{item.text2}</p>
                                <p className="bothText" id={item.textId}>{item.text3}</p>
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="pictureBox">
                                <img src={item.imgsrc} alt={item.imgalt} height={"100%"}/>
                            </div>
                            <div className="textBox">
                                <p className="bothText" id={item.textId}>{item.text}</p>
                            </div>
                            </>
                        )
                        }
                </div>
            ))}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <ArrowUpwardIcon style={arrowIcon} onClick={scrollUp}/>
                <ArrowDownwardIcon style={arrowIcon} onClick={scrollDown}/>
            </div>
        </div>
    )
}