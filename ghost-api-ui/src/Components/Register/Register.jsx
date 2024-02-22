import React from 'react';
import './Register.css';
import backgroundImage from './static/background-image.svg';

export default function Register() {
  return (
    <div>
        <div className='register-parent'>
        <div>
            <img src={backgroundImage} alt="mainlogo" className='register-image'/>
        </div>
        <div className='register-form'>
          <form>
            <label For="uname" style={{fontWeight: "bold"}}>Username</label><label style={{color: 'red'}}>*</label> <br />
            <input type="username" className='username'/><br />
            <label For="password" style={{fontWeight: "bold"}}>Password</label><label style={{color: 'red'}}>*</label> <br/>
            <input type="password" className='password'/><br />
            <label For="password" style={{fontWeight: "bold"}}>Confirm Password</label><label style={{color: 'red'}}>*</label> <br/>
            <input type="password" className='password'/><br />
            <div className='register-button-parent'>
                <div>
                    <button id='signup' className='signup-button'>Sign up</button>
                </div>
                <div style={{marginTop: '8px'}}>
                    <a href="http://">back to Login</a>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
