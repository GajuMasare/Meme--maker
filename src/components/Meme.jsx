import React from "react";
import { useState } from "react";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomUrl:"https://i.imgflip.com/30b1gx.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    },[]);

    function getMemeImage(){
        const randomnumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomnumber].url;
        setMeme(prevMemedata => ({
            ...prevMemedata, 
            randomUrl: url
        }));
    }

    function hadleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }));
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top text" name="topText" value={meme.topText} onChange={hadleChange}/>
                <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={hadleChange}/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme!</button>
            </div>
            <div className="meme">
                <img src={meme.randomUrl} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}