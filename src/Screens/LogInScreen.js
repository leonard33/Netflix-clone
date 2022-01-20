import React, { useState } from 'react';
import './LogInScreen.css'
import Typewriter from "typewriter-effect";
import SignupScreen from './SignupScreen'


function LogInScreen() {

  const[signin, setSignin]= useState(false);

  return (
    
     <div className='login_screen'>
       <div className='logincsreen_background'>
         <img className='logincsreen_logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='Netflix'/>
       </div>
       <button onClick={()=> setSignin(true)} className='loginscreen_button'>
          SIGN IN
       </button>
       <div className='loginscreen_gradient'/>
       <div className='loginscreen_body'>
         {signin ? <SignupScreen/> : (
           <>
           <h1>Unlimited films, Tv programs and 
             more </h1>
           <Typewriter
    
         onInit={(typewriter)=> {
    
         typewriter
          
       
       
         .typeString(`<h2>Watch anywhere cancel at anytime.</h2>`)
  
         .pauseFor(800)
       
         .typeString(`<h3>Ready to watch? Enter your Email to create or restart your membership.</h3>`)
         .start();
         }}
         />
           {/*<h1>Unlimited films, Tv programs and 
             more </h1>
           <h3>Watch anywhere cancel ata anytime.</h3>*/}
           
           <div className='loginscreen_input'>
           <form>
             <input type='email' placeholder='Email Address' />
             <button onClick={()=> setSignin(true)} className='loginscreen_getstarted'>GET STARTED</button>
           </form>
           </div>
           </>
         )}
         
       </div>
  </div>
  )
}

export default LogInScreen;
