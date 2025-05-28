import { useState, useEffect } from "react";
const Troll = () => {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "walk into mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
    }, [])

    function getNewMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: newMemeUrl
        }))
    }

    function handleChange(event){
         const {value, name} = event.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return ( 
       <main>
            <div className="form">
                <label htmlFor="">Top text
                    <input 
                    type="text"
                    placeholder="One does not simply..."
                    name="topText" 
                    onChange={handleChange}
                    value={meme.topText}
                    />
                </label>
                <label htmlFor="">Bottom Text
                    <input type="text"
                     placeholder="...go to Mordor"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                </label>
            </div>
            <button className="meme-btn" onClick={getNewMeme}>Get a new meme image</button>
            <div className="meme">
                <img src={meme.imgUrl} alt="meme was here" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
     );
}
 
export default Troll;