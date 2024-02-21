import React from 'react'
import './Header.css';
import LOGO from './logo/LOGO.svg'

export default function Header() {
  return (
    <div>
        <div className='header'>
          <div className='moto'>
            <h2>Ghost API, Hauntingly Smooth Integration</h2>
          </div>
          <div>
            <img src={LOGO}alt="logo" className='small-logo'/>
          </div>
        </div>
    </div>
  )
}
