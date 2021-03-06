import React, { useEffect, useState } from 'react';

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(()=>{

        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()

    }, [])

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className='form-input'
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className='form-input'
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className='form-button' onClick={getMeme}>
                    Get a new meme image  🖼
                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt="memeImage" className='meme-image'/>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}