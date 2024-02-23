// MainWindow.js

import React from 'react';
import './MainWindow.css';
import bgImage from './static/bgImage.svg';
import Sidebar from '../Sidebar/Sidebar';

export default function MainWindow() {
  return (
    <div className='mainContainer'>
      <Sidebar /> 
      <div className='backgroundImageContainer'>
        <img src={bgImage} alt="backgroundImg" />
      </div>
    </div>
  );
}
