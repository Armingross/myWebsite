import React from "react"
import { useMediaQuery } from '@mui/material'

export function BgImages(page){
    let homeBg;
    let aboutmeBg;
    let contactBg;

    const ratio_5to2 = useMediaQuery("@media screen and (min-aspect-ratio: 5/2)")
    const ratio_7to4_5to2 = useMediaQuery("@media screen and (min-aspect-ratio: 7/4) and (max-aspect-ratio: 5/2)")
    const ratio_1to1_7to4 = useMediaQuery("@media screen and (min-aspect-ratio: 1/1) and (max-aspect-ratio: 7/4)")
    const ratio_4to7_1to1 = useMediaQuery("@media screen and (min-aspect-ratio: 4/7) and (max-aspect-ratio: 1/1)")

    /* when screen is bigger the 5/2 (high width, low height) */
    if(ratio_5to2){
        homeBg = "img/bg/backToCam_5to2.jpg";
        aboutmeBg = "img/bg/onLine_5to2.jpg";
        contactBg = "img/bg/onRight_5to2.jpg";
        console.log("5to2")
    /* when screen is between 5/2 and 7/4 (normal pc display ratio) */
    }else if(ratio_7to4_5to2){
        homeBg = "img/bg/backToCam_Pc.jpg";
        aboutmeBg = "img/bg/onLine_Pc.jpg";
        contactBg = "img/bg/onRight_Pc.jpg";
        console.log("5to4")
    }else if(ratio_1to1_7to4){
        homeBg = "img/bg/backToCam_1to1.jpg";
        aboutmeBg = "img/bg/onLine_1to1.jpg";
        contactBg = "img/bg/onRight_1to1.jpg";
    }else if(ratio_4to7_1to1){
        homeBg = "img/bg/backToCamOriginal.jpg";
        aboutmeBg = "img/bg/onLineOriginal.jpg";
        contactBg = "img/bg/onRightOriginal.jpg";        
    }else {
        homeBg = "img/bg/backToCam_Sp.jpg";
        aboutmeBg = "img/bg/onLine_Sp.jpg";
        contactBg = "img/bg/onRight_Sp.jpg";         
    }


    switch(page){
        case "home":
            return homeBg;
        case "aboutme":
            return aboutmeBg;
        case "contact":
            return contactBg;
    }
}