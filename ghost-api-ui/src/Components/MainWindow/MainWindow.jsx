import React from 'react'
import './MainWindow.css'
import sideview from './main win/sideview.svg'

export default function MainWindow() {
  return (
    <div className='mainWindow'>
      <img src={sideview} alt="sideview" />
    </div>
  )
}
