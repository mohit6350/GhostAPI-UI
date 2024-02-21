import React from 'react'
import './Footer.css';
import instagram from './social/instagram.svg'
import Facebook from './social/Facebook.svg'
import GitHub from './social/GitHub.svg'

export default function Footer(){
  return (
    <div>
        <div className='footer'>
      <h4>Ghost API © 2024 . All Rights.</h4>
      <div className='social'>
      <ul>
      <a href="http://"><li><img src={GitHub} alt="Git" />GitHub</li></a>
      <a href="http://"><li><img src={instagram} alt="insta" /></li></a>
      <a href="http://"><li><img src={Facebook} alt="Facebook" /></li></a>  
      </ul>
      </div> 
        </div>
    </div>
  )
}
