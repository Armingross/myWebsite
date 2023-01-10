import { useState, useRef, useEffect } from "react"
import MenuLogo from "../menuLogo/menuLogo.js"
import styles from "./AboutMeDaniel.css"
import { getItems } from "./Items.js"
import { scroll } from "./Scroll.js"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AboutMeDaniel(){
    /* each Box has own state which has a changeable className so it can change style and position */
    const [box1, setBox1] = useState("active")
    const [box2, setBox2] = useState("next")
    const [box3, setBox3] = useState("next2")
    const [box4, setBox4] = useState("next2")
    const [box5, setBox5] = useState("next2")
    /* pointer decides which boxes are visible */
    const [pointer, setPointer] = useState(1)

    const videoPlay = useRef()

    /* array with all boxes and setBoxes to give it to the functions */
    const box = [box1, box2, box3, box4, box5]
    const setBox = [setBox1, setBox2, setBox3, setBox4, setBox5]

    /* all items(images with text, id...) box changes when the box states change */
    const items = getItems(box)

    /* scroll up deacreases pointer by 1 */
    let point;
    const scrollUp = () => {
        if(pointer > 1){
            point = pointer - 1;
        }
        setPointer(point);
        /* scroll changes the page to the page at point which is pointer */
        scroll(setBox, point)
    }

    /* same as scroll up just increasing the pointer by 1 */
    const scrollDown = () => {
        if(pointer < box.length){
            point = pointer + 1;
        }
        setPointer(point);
        scroll(setBox, point)
    }

    /* when pointer changes value, the video will either play or restart and pause */
    useEffect(() => {
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