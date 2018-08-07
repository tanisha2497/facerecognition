import React from 'react' 
import './Imagelinkform.css';
const Imagelinkform=({oninputChange,onbuttonSubmit})=>{ 
 //we could have said props.oninputChange but with {}we destructured not needing props. now 
	return (
		<div>
		   <p className ='tc fw4'>
             This magic brain will detect faces from you pictures .Give it a try
		   </p>
		    <div className='center form br3 pa3 shadow-5'>
		        <div className=' center'>  
                   <input type='text' 
                      placeholder='Image link'
                      className='pa2 tc bg-light-red w-70'
                      onChange={oninputChange}
                     />
                    <button 
                    className='tc pa2 w-30 grow pointer ph3 pv2 dib link bg-light-purple'
                    onClick={onbuttonSubmit}> detect </button>
                    
                </div>
            </div>           
        </div>   
     );
}

export default Imagelinkform;
          