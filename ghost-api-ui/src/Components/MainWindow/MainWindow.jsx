import React from 'react'
import './MainWindow.css'
import mainlogo from './main win/mainlogo.svg'

export default function Head() {
  return (
    <div className='mainWindow'>
      <div>
          <img src={mainlogo} alt="mainlogo" />
      </div>
      <div className='login'>
        <form>
          <label For="uname">Username</label><label style={{color: 'red'}}>*</label> <br />
          <input type="username" /><br />
          <label For="password">Password</label><label style={{color: 'red'}}>*</label> <br/>
          <input type="password" /><br /><br />
          <button id='login'>Login</button>
          <button id='signup'>Signup</button><br /><br />
          <a href="http://">Forgot Password?</a>

        </form>
      </div>
    </div>
  )
}
