import React from "react"

export default function Header(){
    return(
        <header className="header">
            <img src="./src/assets/Trollface.png" 
            className="header--image"/>

            <h1 className="header--title">Meme Maker</h1>
            <h4 className="header--project">Made by Gaju</h4>
        </header>
    )
}