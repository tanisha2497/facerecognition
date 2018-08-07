import React from 'react'
import './face.css'
const Facerecognition=({ imageUrl ,box})=>{
	return (
		 <div className='ma center'>
		    <div className='absolute mt2'>
              <img id='inputimage'src= { imageUrl } className ='mt2 'width='500px' height='auto' alt='' 
               />
		         
		       <div className='facebox' style={{left:box.left,right:box.right,top:box.top,bottom:box.bottom}}>
                 </div>
		    </div>
		 </div>
     );
}
export default  Facerecognition;
          