import "../css-files/navbar.css"
import logo from "../Assets/svg/logo.svg"
import pics_icon from "../Assets/svg/pics-icon.svg"
import files_icon from "../Assets/svg/document-icon.svg"

export default function Navbar() {

    const handleOpen = (evt) => {

        if (evt.target.className === "pic")
            document.getElementsByClassName("image")[0].className = "window image react-draggable"
            if (evt.target.className === "document")
            document.getElementsByClassName("description")[0].className = "window description react-draggable"
    }

    return(
        <>
            <div id="navbar">
                <img className= "logo"src={logo}/>
                <div className="opened-apps">
                    <img className="pic" src={pics_icon} onClick={handleOpen}/>
                    <img className="document" onClick={handleOpen} src={files_icon}/>
                </div>
            </div>
        </>
    )
}