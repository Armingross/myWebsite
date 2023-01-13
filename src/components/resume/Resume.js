import styles from "../myWebsite.css"
import MenuLogo from "../menuLogo/menuLogo.js"

export default function Resume(){
    /* page is for MenuLogo so that i know which button should be disactivated */
    const page = "resume"
    
    return(
        <div className="display">
            <MenuLogo page={page}></MenuLogo>
            <div className="centerBoxResume">
                <button className="Resumebtn">Download Resume</button>
            </div> 
        </div>
    )    
}