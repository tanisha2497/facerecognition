import React, {Component} from 'react'
import './register.css'
class Register extends Component
{ 
  constructor(props)
  {
    super(props)
    this.state={
       registerName:'',
       registerEmail:'',
      registerPassword:''
    }
  }
  
  onNameChange=(event)=>{
    this.setState({registerName:event.target.value})
  }
  onEmailChange=(event)=>{
    this.setState({registerEmail:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({registerPassword:event.target.value})
  }
  onSubmit=()=>{
    fetch('http//localhost:3000/register',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        name:this.state.registerName,
        email:this.state.registerEmail,
        password:this.state.registerPassword
      })
    })
    .then(res=>res.json)
    .then(console.log)
    this.props.changeroute('home');
  }
  render(){
     return(
       <div>
         <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
           <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" for="Name">Name</label>
                  <input
                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                   type="text" 
                   name="Name" 
                   id="email-address"
                   onChange={this.onNameChange}/>
                </div>
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
                value="Register"
                onClick={this.Submit}
                />
              </div>
              <div className="lh-copy mt3">
                 </div>
                 </form>
            </main>
          </article>    
       </div>
    );
  }
}

 
export default Register;