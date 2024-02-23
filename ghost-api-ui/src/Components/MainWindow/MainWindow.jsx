import React from 'react'
import './MainWindow.css'
import sideview from './static/bgImage.svg'

export default function MainWindow() {
  return (
    <div className='mainWindow'>
      <img src={sideview} alt="sideview" />
    </div>
  )
}
