import React from 'react';

export default function Header(){
    return(
        <header>
        <nav className='navbar'>
            <div className='logo-container'>
            <img src='./logo512.png' className='image' alt='logo'/>
            <p className='facts'>ReactFacts</p>
            </div>
            <p>React Course - Part 1</p>
        </nav>
        </header>
    )
}