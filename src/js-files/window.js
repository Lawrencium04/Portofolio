import Draggable from "react-draggable"
import React, { useEffect } from "react"

export default function Window(args) {

    const hideWindow = (evt) => {
        const parent = evt.target.offsetParent;

        parent.className = "hidden " + parent.className;
    }

    const closeWindow = (evt) => {
        const parent = evt.target.offsetParent;

        const buttonId = parent.className.match(/\S+/gi)[1] + "_btn"

        document.querySelectorAll("." + buttonId)[0].className = "hidden " + document.querySelectorAll("." + buttonId)[0].className;

        parent.className = "closed " + parent.className;
    }

    return (
        <>
        <Draggable
            handle=".win_handle">
                <div className={"window " + args.cls}>
                    <div className="bar">
                        <div className="win_handle"></div>
                        <p>{args.windowName}</p>
                        <div style={{display: "inline-flex", width: "min-content"}}>
                        <button className="hide" onClick={hideWindow}>_</button>
                        <button className="close" onClick={closeWindow} >x</button>
                        </div>
                    </div>
                    <div className="content">
                        {args.children}
                    </div>
                </div>
        </Draggable>   
        </>
    )
}