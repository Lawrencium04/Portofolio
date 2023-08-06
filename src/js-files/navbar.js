import "../css-files/navbar.css"
import logo from "../Assets/svg/logo.svg"
import pics_icon from "../Assets/svg/pics-icon.svg"
import files_icon from "../Assets/svg/document-icon.svg"
import { useState  } from "react"
import MenuButton from "./menu-button"
import dark_icon from "../Assets/png/night-mode.png"
import github_icon from "../Assets/png/github-logo.png"
import instagram from "../Assets/png/instagram.png"


export default function Navbar() {

    const openWindow = (evt) => {

        const windowName = evt.target.className.replace("_btn", "")

        const windowObj = document.querySelectorAll("." + windowName)[0]

        if (windowObj.className.includes("hidden"))
            windowObj.className = windowObj.className.replace("hidden", "");
        else
            windowObj.className = "hidden " + windowObj.className;

    }

    const openMenu = (evt) => {

        const menuObj = document.querySelectorAll("." + "menu")[0]

        if (menuObj.className.includes("hidden"))
            menuObj.className = menuObj.className.replace("hidden ", "");
        else
            menuObj.className = "hidden " + menuObj.className;
    }

    return(
        <>
            <div className="hidden menu">
                <div className="sidebar">
                    <a target="_blank" href="https://instagram.com/lawr.ph"><img src={instagram}/></a>
                    <a target="_blank" href="https://github.com/lawrencium04"><img src={github_icon}/></a>
                    <a><img src={dark_icon}/></a>
                </div>
                <MenuButton imgSrc={pics_icon} btnName="Pictures" trg="image"/>
                <MenuButton imgSrc={files_icon} btnName="Documents" trg="description"/>
                <MenuButton imgSrc={pics_icon} btnName="Pictures"/>
                <MenuButton imgSrc={pics_icon} btnName="Pictures"/>
                <MenuButton imgSrc={pics_icon} btnName="Pictures"/>
                <MenuButton imgSrc={pics_icon} btnName="Pictures"/>
            </div>
            <div id="navbar">
                <img className= "logo"src={logo} onClick={openMenu}/>
                <div className="opened-apps">
                    <img id="btn" className="image_btn" onClick={openWindow} src={pics_icon}/>
                    <img id="btn" className="description_btn" onClick={openWindow} src={files_icon}/>
                </div>
            </div>
        </>
    )
}