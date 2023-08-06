import "../css-files/home.css"
import eu from "../Assets/png/eu-pic.jpg"
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import Draggable from "react-draggable";
import Window from "./window";

export default function Home() {

    useLayoutEffect(() => {
        
        document.querySelectorAll(".window").forEach((e) => {
            e.className = "closed " + e.className;
        })

        document.querySelectorAll('#btn').forEach((e) => {
            e.className = "hidden " + e.className;
        })

    }, []);

    return (
        <>
            <div id="home">
                <Window windowName="Laurențiu_Laslău.png" cls="image">
                    <img src={eu}/>
                </Window>
                <Window windowName="my_description.txt" cls="description">
                <p><b>Hello!</b> <br/>this is a text document.</p>
                </Window>
                <Window windowName="contact_me.exe" cls="contact">
                    
                </Window>
            </div>
        </>
    )
}