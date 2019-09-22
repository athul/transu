import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "./login.css";


function SignUp() {
   
   return (
      <div>
      <div class="wrapper fadeInDown">
  <div id="formContent">
   
    <h2 class="Inactive underlineHover"> Sign In </h2>
    <h2 class="active ">Sign Up </h2>

    
 


    <form>
      <input type="text" id="name" class="fadeIn first" name="login" placeholder="Name"/>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Sign Up"/>
    </form>

    <div id="formFooter">
      <a class="underlineHover" href="#">Already a member?</a>
    </div>

  </div>
</div>
      </div>
 );
}


export default SignUp;