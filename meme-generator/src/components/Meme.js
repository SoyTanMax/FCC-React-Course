import React, { useState } from 'react';
import memesData from '../memesData';

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMeme(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main>
            <div className='form'>
                <input type="text" placeholder="Top text" className='form-input'/>
                <input type="text" placeholder="Bottom text" className='form-input'/>
                <button className='form-button' onClick={getMeme}>
                    Get a new meme image  🖼
                </button>
            </div>
            <img src={meme.randomImage} alt="memeImage" className='meme-image'/>
        </main>
    )
}