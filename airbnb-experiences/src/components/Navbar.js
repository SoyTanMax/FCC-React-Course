import React from 'react';
import logo from '../assets/airbnb.svg'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img className='logo' src={logo} width="82.02px" alt="logo"/>
        </nav>
    )
}