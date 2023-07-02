import react from "react";
import Navbar from "./navbar.js";
import Home from "./home.js"
import "../css-files/app.css"
import background from "../Assets/png/background.svg"

export default function App() {
    return (
        <>
            <div id="container">
            <img className="bg" src={background}/>
                <Navbar/>
                <Home/>
            </div>
        </>
    )
}