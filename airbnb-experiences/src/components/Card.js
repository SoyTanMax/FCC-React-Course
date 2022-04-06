import React from 'react';
import star from '../assets/star.svg'

export default function Card(props){
    const {image, quantity, description, price, rating, openSpots, location } = props.card
    
    let badgeText
    if(openSpots === 0){
        badgeText = "sold out"
    } else if (location === "online"){
        badgeText = "online"
    }

    return (
        <div className='card'>
            <div className='image-container'>
                {badgeText && <div className='status'>{badgeText}</div>}
                <img src={image} className='card-image' alt="card" width="176px"/>
            </div>
            <div className='rating'>
                <img src={star} alt="star" className='star'/>
                <p className='rating'>{rating}</p>
                <p className='quantity'>({quantity})</p>
                <p className='location'>• {location}</p>
            </div>
            <p className='description'>{description}</p>
            <p className='price'>
                <strong>From ${price}</strong> / person
            </p>
        </div>
    )
}