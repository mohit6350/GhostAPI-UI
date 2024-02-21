import React from 'react'
import './Header.css';
import LOGO from './logo/LOGO.svg'

export default function Header() {
  return (
    <div>
        <div className='header'>
        <h1>Ghost API, Hauntingly Smooth Integration</h1>
        <img src={LOGO}alt="logo" />
        </div>
    </div>
  )
}
