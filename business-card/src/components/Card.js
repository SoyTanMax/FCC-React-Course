import React from 'react';
import picture from '../assets/picture.png'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linked from '../assets/linked.svg'
import mail from '../assets/mail.svg'
import twitter from '../assets/twitter.svg'


export default function Card(){
    return(
        <div className='card'>
            <img src={picture} alt="business" class="card-picture"/>
            <div className='card-content'>
                <h2 className='name is-white is-centered'>Laura Smith</h2>
                <p className='role is-centered'>Frontend Developer</p>
                <p className='is-small is-white is-centered'>laurasmith.website</p>
                <div className='buttons-container'>
                    <button className='button email'>
                        <img src={mail} alt="mail"/>
                        Email
                    </button>
                    <button className='button linked'>
                        <img src={linked} alt="linked-in"/>
                        LinkedIn
                    </button>
                </div>
                <p className='title is-white'>About</p>
                <p className='is-small is-white'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <p className='title is-white'>Interests</p>
                <p className='is-small is-white'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>  
            </div>
            <div className='socials'>
                <img src={twitter} alt="twitter"/>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={github} alt="github"/>
            </div>
        </div>
    )
}