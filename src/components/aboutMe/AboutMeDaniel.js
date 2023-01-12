import { useState, useRef, useEffect } from "react"
import MenuLogo from "../menuLogo/menuLogo.js"
import styles from "./AboutMeDaniel.css"
import { getItems } from "./Items.js"
import { scroll } from "./Scroll.js"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AboutMeDaniel(){
    /* each Box has own ref which has a changeable className so it can change style and position */
    const box = [];
    box[0] = useRef()
    box[1] = useRef()
    box[2] = useRef()
    box[3] = useRef()
    box[4] = useRef()
    box[5] = useRef()

    const text = [];
    text[0] = useRef()
    text[1] = useRef()
    text[2] = useRef()
    text[3] = useRef()
    text[4] = useRef()
    text[5] = useRef()


    /* pointer decides which boxes are visible */
    const [pointer, setPointer] = useState(1)

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
        if(pointer < box.length){
            point = pointer + 1;
        }else{
            point = box.length;
        }
        setPointer(point);
    }

    /* when pointer changes value which happens after scrolldown or scrollup... */
    useEffect(() => {
        /* ...scroll function will be called... */
        scroll(box, pointer)
        /* ...and the video will either play or restart and pause */
        if(pointer === 2){
            videoPlay.current.play();
        }else{
            videoPlay.current.currentTime = 0;
            videoPlay.current.pause();
        }
        text[pointer - 1].current.id = "activeText"
        if(pointer != box.length){
            text[pointer].current.id = "inActiveText"
        }
        if(pointer != 1){
            text[pointer - 2].current.id = "inActiveText"
        }
        console.log(text[1].current)
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
                <div ref={box[item.id-1]} className="itemBox" key={item.id} id="">
                        {
                        item.page2 ? (
                            <>
                            <div className="pictureBox">
                                <video ref={videoPlay} muted>
                                    <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                                </video>
                            </div>
                            <div className="textBox">
                                <p className="bothText" ref={text[1]} id="inActiveText">{item.text}</p>
                                <p className="bothText" ref={text[1]} id="inActiveText">{item.text2}</p>
                                <p className="bothText" ref={text[1]} id="inActiveText">{item.text3}</p>
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="pictureBox">
                                <img src={item.imgsrc} alt={item.imgalt} height={"100%"}/>
                            </div>
                            <div className="textBox">
                                <p className="bothText" ref={text[item.id-1]} id="inActiveText">{item.text}</p>
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