import React from "react"
import styles from "./aboutMe.css"
import { Typography } from '@mui/material'

export default function Home(){
    <link rel="stylesheet" href="aboutMe.css"/>

    return(
        <div className="aboutMedisplay">
            {/* Logo in left up Corner */}
            <div className="logoBox">
                <Typography className="logoText">A|G</Typography>                    
            </div>
            {/* Menu in right up corner */}
            <div className="menuBox">
                    {/* left Button */}
                    <button className="menuButton">
                        Home
                    </button>
                    {/* middle Button */}
                    <button className="menuButton">
                        Resume
                    </button>
                    {/* right Button */}
                    <button className="menuButton">
                        Contact
                    </button>
            </div>

            {/* First Page */}
            <div className="whiteBoxDiv" id="firstPageBox">
                {/* Text Box */}
                <div className="whiteBox" id="firstPageTextBox">
                    <p className="text">I'm from Sarnthein</p>
                </div>
                {/* Picture */}
                <img src="img/sarnthein.jpg" alt="picture of Sarnthein" className="firstPagePicture"/>
            </div>

            {/* Second Page */}
            <div className="whiteBoxDiv" id="secondPageBox">
                {/* Text Box */}
                <div className="secondPageTextBox">
                    <p className="text">Which is Located</p>
                    <p className="text">in the North</p>
                    <p className="text">of Italy</p>
                </div>
                {/* Picture Box */}
                <video className="secondPageVideo" autoPlay muted>
                    <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                </video>
            </div>

            {/* Third Page */}
            <div className="whiteBoxDiv" id="thirdBox">
                <img src="img/hikingTent.jpg" alt="picture of a Tent" className="thirdPictureOne"/>
                <div className="whiteBox" id="thirdTextBox">
                    <p className="text">I like Hiking</p>
                </div>
                <img src="img/hirzerKreuz.jpg" alt="picture of a cross on mountain" className="thirdPictureTwo"/>
            </div>

            {/* Traveling page */}
            <div className="whiteBoxDiv" id="fourthBox">
                <img src="img/grandCanyon.jpg" alt="picture of me at the Grand Canyon" className="fourthPictureOne"/>
                <div className="whiteBox" id="FourthTextPictureBox">
                    <div id="fourthTextBox">
                            <p className="text">I like Traveling</p>
                    </div>
                    <img src="img/newYork.jpg" alt="picture of the New York Skyline" className="fourthPictureTwo"/>
                </div>
                <img src="img/goldenGate.jpg" alt="picture of me in front of the golden Gate Bridge" className="travelPictureTwo"/>
            </div>   

            {/* Fifth page */}
            <div className="whiteBoxDiv">
                <div className="whiteBox"></div>
                <div className="whiteBox"></div>
            </div> 

            {/* Sixth page */}
            <div className="whiteBoxDiv">
                <div className="whiteBox"></div>
                <div className="whiteBox"></div>
            </div>

        </div>
    )
}