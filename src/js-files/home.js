import "../css-files/home.css"
import eu from "../Assets/png/eu-pic.jpg"
import { useRef, useEffect, useState } from "react"
import Draggable from "react-draggable";

export default function Home() {

    const handleButton = (evt) => {
        evt.target.offsetParent.className = evt.target.offsetParent.className + " closed"
    }

    return (
        <>
            <div id="home">
                <Draggable
                handle=".bar">
                    <div className="window image">
                        <div className="bar">
                            <p><b>Laurențiu</b>_Laslău.png</p>
                            <div style={{display: "inline-flex", width: "min-content"}}>
                            <button className="hide" onClick={handleButton}>_</button>
                            <button className="close">x</button>
                            </div>
                        </div>
                        <div className="content">
                            <img src={eu}/>
                        </div>
                    </div>
                </Draggable>
                <Draggable
                handle=".bar">
                    <div className="window description">
                        <div className="bar">
                            <p>my_<b>description</b>.png</p>
                            <div style={{display: "inline-flex", width: "min-content"}}>
                            <button className="hide" onClick={handleButton}>_</button>
                            <button className="close">x</button>
                            </div>
                        </div>
                        <div className="content">
                            <p><b>Hello!</b> <br/>this is a text document.</p>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}