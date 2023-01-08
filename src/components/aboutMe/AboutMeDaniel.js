import { useState } from "react"
import MenuLogo from "../menuLogo/menuLogo.js"
import styles from "./AboutMeDaniel.css"

export default function AboutMeDaniel(){
    /* goldenGate */
    const [box1, setBox1] = useState("active")
    /* newYork */
    const [box2, setBox2] = useState("next")
    /* Sarnthein */
    const [box3, setBox3] = useState("next2")
    /* Gym */
    const [box4, setBox4] = useState("next2")
    /* volleyBall */
    const [box5, setBox5] = useState("next2")
    /* Pointer */
    const [pointer, setPointer] = useState(1)

    const scrollUp = () => {
        if(pointer == 1 || pointer == 2){
            setBox1("active")
            setBox2("next")
            setBox3("next2")
            setBox4("next2")
            setBox5("next2")
            setPointer("1")
        }else if(pointer == 3){
            setBox1("prev")
            setBox2("active")
            setBox3("next")
            setBox4("next2")
            setBox5("next2")
            setPointer("2")
        }else if(pointer == 4){
            setBox1("prev2")
            setBox2("prev")
            setBox3("active")
            setBox4("next")
            setBox5("next2")
            setPointer("3")
        }else if(pointer == 5){
            setBox1("prev2")
            setBox2("prev2")
            setBox3("prev")
            setBox4("active")
            setBox5("next")
            setPointer("4")
        }
    }

    const scrollDown = () => {
        if(pointer == 1){
            setBox1("prev")
            setBox2("active")
            setBox3("next")
            setBox4("next2")
            setBox5("next2")
            setPointer("2")
        }else if(pointer == 2){
            setBox1("prev2")
            setBox2("prev")
            setBox3("active")
            setBox4("next")
            setBox5("next2")
            setPointer("3")
        }else if(pointer == 3){
            setBox1("prev2")
            setBox2("prev2")
            setBox3("prev")
            setBox4("active")
            setBox5("next")
            setPointer("4")
        }else if(pointer == 4){
            setBox1("prev2")
            setBox2("prev2")
            setBox3("prev2")
            setBox4("prev")
            setBox5("active")
            setPointer("5")
        }
    }

        const items = [
            { id: 1, imgsrc: "img/goldenGate.jpg", imgalt: "picture of me playing volleyball", text: "I like Sport", className: "itemBox", boxID: box1, textId: "inActiveText" },
            { id: 2, imgsrc: "img/newYork.jpg", imgalt: "picture of the New York Skyline", text: "I like Traveling", className: "itemBox", boxID: box2, textId: "inActiveText" },
            { id: 3, imgsrc: "img/sarntheinQuadrat.jpg", imgalt: "picture of Sarnthein", text: "Im from Sarnthein", className: "itemBox", boxID: box3, textId: "activeText" },
            { id: 4, imgsrc: "img/gym.png", imgalt: "picture of me playing volleyball", text: "I like Sport", className: "itemBox", boxID: box4, textId: "inActiveText" },
            { id: 5, imgsrc: "img/volleyball.jpg", imgalt: "picture of me playing volleyball", text: "I like Sport", className: "itemBox", boxID: box5, textId: "inActiveText" }
        ]
    
        return(
            <div className="display">
                <MenuLogo></MenuLogo>
                <div className="sliderBox">
                {items.map((item) => (
                    <div key={item.id} className={item.className} id={item.boxID}>
                        <div className="pictureBox">
                            <img src={item.imgsrc} alt={item.imgalt} height={"100%"}/>
                        </div>
                        <div className="textBox">
                            <p className="bothText" id={item.textId}>{item.text}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div>
                    <button onClick={scrollUp}>nach oben</button>
                    <button onClick={scrollDown}>nach unten</button>
                </div>
            </div>
        )
}