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
        homeBg = "img/bg/backToCam/backToCam_5to2.jpg";
        aboutmeBg = "img/bg/onLine/onLine_5to2.jpg";
        contactBg = "img/bg/onRight/onRight_5to2.jpg";
    /* when screen is between 5/2 and 7/4 (normal pc display ratio) */
    }else if(ratio_7to4_5to2){
        homeBg = "img/bg/backToCam/backToCam_Pc.jpg";
        aboutmeBg = "img/bg/onLine/onLine_Pc.jpg";
        contactBg = "img/bg/onRight/onRight_Pc.jpg";
    }else if(ratio_1to1_7to4){
        homeBg = "img/bg/backToCam/backToCam_1to1.jpg";
        aboutmeBg = "img/bg/onLine/onLine_1to1.jpg";
        contactBg = "img/bg/onRight/onRight_1to1.jpg";
    }else if(ratio_4to7_1to1){
        homeBg = "img/bg/backToCam/backToCamOriginal.jpg";
        aboutmeBg = "img/bg/onLine/onLineOriginal.jpg";
        contactBg = "img/bg/onRight/onRightOriginal.jpg";        
    }else {
        homeBg = "img/bg/backToCam/backToCam_Sp.jpg";
        aboutmeBg = "img/bg/onLine/onLine_Sp.jpg";
        contactBg = "img/bg/onRight/onRight_Sp.jpg";         
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