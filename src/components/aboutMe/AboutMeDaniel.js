import MenuLogo from "../menuLogo/menuLogo.js"
import styles from "./AboutMeDaniel.css"

export default function AboutMeDaniel(){

    return(
        <div className="display">
            <MenuLogo></MenuLogo>
            <div className="sliderBox">
                <div className="inActive">
                    <div className="pictureBox">
                        <img src="img/newYork.jpg" alt="picture of the New York Skyline" height={"100%"}/>
                    </div>
                    <div className="activeTextBox">
                        <p className="bothText" id="inActiveText">I like Traveling</p>
                    </div>
                </div>
                <div className="active">
                    <div className="pictureBox">
                        <img src="img/sarntheinQuadrat.jpg" alt="picture of Sarnthein" height={"100%"}/>
                    </div>
                    <div className="activeTextBox">
                        <p className="bothText" id="activeText">I'm from Sarnthein</p>
                    </div>
                </div>
                <div className="inActive">
                    <div className="pictureBox">
                        <img src="img/hikingTent.jpg" alt="picture of a Tent" height={"100%"}/>
                    </div>
                    <div className="activeTextBox">
                        <p className="bothText" id="inActiveText">I like Hiking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}