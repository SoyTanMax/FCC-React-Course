import React, { Component } from 'react'
import world from '../assets/world.svg'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <img src={world} width="24px" alt="world"/>
        <p>my travel journal</p>
      </nav>
    )
  }
}
