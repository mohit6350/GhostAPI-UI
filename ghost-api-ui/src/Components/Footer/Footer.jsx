import React from 'react'
import './Footer.css';
import instagram from './social/instagram.svg'
import Facebook from './social/Facebook.svg'
import GitHub from './social/GitHub.svg'

export default function Footer(){
  return (
    <div>
        <div className='footer'>
          <div className='info'>
            <h4>Ghost API © 2024 . All rights reserved.</h4>
            <h5>Mohit Khare</h5>
          </div>
            <div className='social'>
              <ul>
                <a href="http://"><li><img src={GitHub} alt="Git" /></li></a>
                <a href="http://"><li><img src={instagram} alt="insta" /></li></a>
                <a href="http://"><li><img src={Facebook} alt="Facebook" /></li></a>  
             </ul>
           </div> 
        </div>
    </div>
  )
}
