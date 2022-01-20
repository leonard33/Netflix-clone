import React from 'react';
import './SignupScreen.css'

function SignupScreen() {
  return <div className='signup_screen'>
   <form>
       <h1>SIGN UP</h1>
       <input type='email' placeholder='Email'/>
       <input type='password' placeholder='password' />
       <button type='submit'>Sign In</button>
       <h4><span className='signupscreen_gray'>New to netflix?</span>
        <span className='signupscreen_link'>Sign Up now.</span></h4>
   </form>
  </div>;
}

export default SignupScreen;
