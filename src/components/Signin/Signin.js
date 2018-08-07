import React, { Component } from 'react'
import './signin.css'
class Signin extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }
  onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value});
  
  }

  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value});
  }
  onSubmit=()=>
  {
    fetch('http://localhost:3000/signin',{     //fetch auto calls a get request.
      method:'post',
      headers:{'Content-Type':'application/json'}, //headers take only objects as input 
      body:JSON.stringify( 
      { email: this.state.signInEmail ,
        password: this.state.signInPassword})
     }).then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data ==='signed in'){
          console.log('check')
          this.props.changeroute("home","home")
        }
      })
  } 
 render(){
    return(
     <article className="br3 shadow-5 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw5 center">
       <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email"
              name="email-address" 
              id="email-address"
              onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password"
              name="password" 
              id="password"
              onChange={this.onPasswordChange}
              />            
            </div>
            </fieldset>
          <div className="">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
            onClick={this.onSubmit}/>
          </div>
          <div className="lh-copy mt3">
            <a onClick={()=>this.props.changeroute('register','register')} href="#0" className="f6 link dim black db">Register</a>
           </div>
             </form>
        </main>
      </article>    
    );
 }
}
export default Signin;