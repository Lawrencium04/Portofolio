import "../css-files/navbar.css"
import logo from "../Assets/svg/logo.svg"
import pics_icon from "../Assets/svg/pics-icon.svg"
import files_icon from "../Assets/svg/document-icon.svg"

export default function Navbar() {
    return(
        <>
            <div id="navbar">
                <img className= "logo"src={logo}/>
                <div className="opened-apps">
                    <img src={pics_icon}/>
                    <img src={files_icon}/>
                </div>
            </div>
        </>
    )
}