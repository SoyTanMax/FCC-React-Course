import React from 'react';
import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={logo} className="logo" alt="logo"/>
                <p className='logo-text'>Meme Generator</p>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}