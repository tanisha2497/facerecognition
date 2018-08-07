import React from 'react'
import Tilt from 'react-tilt';
import brainlogo from './brainlogo.png' 
import './logo.css'
const Logo=()=>{
   return (
		<div className='ma3 pa2 br2' >
		   <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                  <img style={{paddingTop:'5px'}} src={brainlogo} alt='logo'className='h-40 w-40 pa3'/>
                </div>
           </Tilt>
        </div>     
  );
}
export default Logo;
            