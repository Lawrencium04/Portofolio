import "../css-files/navbar.css"
import logo from "../Assets/svg/logo.svg"
import pics_icon from "../Assets/svg/pics-icon.svg"
import files_icon from "../Assets/svg/document-icon.svg"
import { useState  } from "react"


export default function Navbar() {

    const openWindow = (evt) => {

        const windowName = evt.target.className.replace("_window", "")

        const windowObj = document.querySelectorAll("." + windowName)[0]

        if (windowObj.className.includes("hidden"))
            windowObj.className = windowObj.className.replace("hidden", "");
        else
            windowObj.className = "hidden " + windowObj.className;

    }

    return(
        <>
            <div id="navbar">
                <img className= "logo"src={logo}/>
                <div className="opened-apps">
                    <img className="image_window" onClick={openWindow} src={pics_icon}/>
                    <img className="description_window" onClick={openWindow} src={files_icon}/>
                </div>
            </div>
        </>
    )
}