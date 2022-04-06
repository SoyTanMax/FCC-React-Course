import React from 'react'
import location from '../assets/location.svg'

export default function Item(props) {
    return (
      <div className='item'>
        <img src={props.image} className="image"/>
        <div className='info'>
            <div className='location-container'>
                <img src={location} alt="location"/>
                <p>{props.location}</p>
                <a href={props.link}>View on Google Maps</a>
            </div>
            <h2>{props.name}</h2>
            <strong>{props.startDate} - {props.endDate}</strong>
            <p className='description'>{props.description}</p>
        </div>
      </div>
    )
}
