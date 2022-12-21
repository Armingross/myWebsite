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
            <div className="whiteBoxDiv" id="firstBox">
                {/* Text Box */}
                <div className="whiteBox" id="firstTextBox">
                    <p className="text">I'm from Sarnthein</p>
                </div>
                {/* Picture Box */}
                <div className="whiteBox" id="firstPictureBox">
                    <img src="img/sarnthein.jpg" alt="picture of Sarnthein" width={"100%"} height={"100%"}/>
                </div>
            </div>
            {/* Second Page */}
            <div className="whiteBoxDiv" id="secondBox">
                {/* Text Box */}
                <div className="whiteBox" id="secondTextBox">
                    <p className="text">Which is Located</p>
                    <p className="text">in the North</p>
                    <p className="text">of Italy</p>
                </div>
                {/* Picture Box */}
                <div className="whiteBox" id="secondPictureBox">
                                        {/* #svgView(preserveAspectRatio(none))  */}
                    {/* <img src="img/italy.svg" alt="picture of Italy" width={"100%"} height={"100%"}/> */}
                    <video width="100%" height="100%" style={{objectFit: "fill"}} autoPlay muted>
                        <source src="video/Sarnthein.mp4#svgView(preserveAspectRatio(none))" type="video/mp4"/>
                        {/* Sarnthein.mp4#svgView(preserveAspectRatio(none)) */}
                    </video>
                </div>
            </div>
            {/* Third Page */}
            <div className="whiteBoxDiv" id="thirdBox">
                <div className="whiteBox" id="thirdPictureBox">
                    <img src="img/hiking.jpg" alt="picture of a Tent" width={"100%"} height={"100%"}/>
                </div>
                <div className="whiteBox" id="thirdTextBox">
                        <p className="text">I like Hiking</p>
                </div>
            </div>
            {/* Fourth page */}
            <div className="whiteBoxDiv" id="fourthBox">
                <div className="whiteBox" id="fourthPictureOneBox">
                    <img src="img/grandCanyon.jpg" alt="picture of me at the Grand Canyon" width={"100%"} height={"100%"}/>
                </div>
                <div className="whiteBox" id="fourthTextBox">
                        <p className="text">I like Traveling</p>
                </div>
                <div className="whiteBox" id="fourthPictureTwoBox">
                    <img src="img/goldenGate.jpg" alt="picture of me in front of the golden Gate Bridge" width={"100%"} height={"100%"}/>
                </div>
            </div>            
            {/* Fourth page */}
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