import React from 'react';
import './Register.css';
import backgroundImage from './static/background-image.svg';

export default function Register() {
  return (
    <div>
        <div className='register-parent'>
        <div>
            <img src={backgroundImage} alt="mainlogo" className='logo'/>
        </div>
        <div className='login'>
          <form>
            <label For="uname">Username</label><label style={{color: 'red'}}>*</label> <br />
            <input type="username" className='username'/><br />
            <label For="password">Password</label><label style={{color: 'red'}}>*</label> <br/>
            <input type="password" className='password'/><br />
            <div className='buttons'>
                <button id='login' className='login-button'>Login</button>
                <button id='signup'>Sign up</button>
            </div>
            <br/>
            <a href="http://">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  )
}
