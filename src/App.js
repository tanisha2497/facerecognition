import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import Imagelinkform from './components/Imagelinkform/Imagelinkform';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank.js' 
import './App.css'
import Facerecognition from './components/Facerecognition/Facerecognition.js'
import Clarifai from'clarifai';
class App extends Component {
   constructor()
   {
      console.log('const')
     super()
      this.state={
       input:'',
       imageUrl:'',
       box:{},
       route:'signin',
       issignin:'signin'
      }
    }
     
    changeroute=(value,issignin)=>{
      console.log('route change')
      this.setState({route:value})
      this.setState({issignin:issignin})     
    }
   calculatebox=(data)=>{
    const clarifiabox=data.outputs[0].data.regions[0].region_info.bounding_box
     const inputimage = document.getElementById('inputimage')
     const width = Number(inputimage.width)
     const height = Number(inputimage.height)
       return{
       left : clarifiabox.left_col * width,
       top : clarifiabox.top_row * height,
       right : width -(clarifiabox.right_col * width),
       bottom : height-(clarifiabox.bottom_row * height)
      }
   }
   displayface=(box)=>{
      this.setState({box:box})
    }
   oninputChange=(event)=>
    {
      this.setState({input:event.target.value})
    }
      onbuttonSubmit=()=>
      {
         this.setState({imageUrl:this.state.input})
        const app = new Clarifai.App({apiKey:'ef28d32798e14f3e9a8a4978c053c34b'});
        app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
        .then(response=> this.displayface(this.calculatebox(response))
        .catch=(err)=>console.log(err)
        );
      }
   render() {   
    console.log(this.state.route)
    return (
         <div className='background'>
            <Particles className='particles' 
              params={{
                particles:{
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }}
            />
            <Navigation issignin={this.state.issignin} changeroute={this.changeroute}/> 
            { this.state.route === "home" 
             ?<div>
                <Logo/>
               <Rank/>
               <Imagelinkform 
               oninputChange={this.oninputChange} 
               onbuttonSubmit={this.onbuttonSubmit}
                />
                <Facerecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
              </div>
              :(this.state.route==='signin'?
                <Signin changeroute={this.changeroute}/>
              :<Register changeroute={this.changeroute}/>
              ) 
             } 
          </div>
    );
  }
}

export default App;
