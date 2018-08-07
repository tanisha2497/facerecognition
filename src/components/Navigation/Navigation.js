import React from 'react'
const Navigation=({changeroute,issignin})=>{
	if (issignin === 'signin')
	{
	    return (
	    	<div>
	            <nav style={{display:'flex',justifyContent:'flex-end'}}>
	              <p  onClick={()=>changeroute('register','register')} className='f3 link dim black pa3 underline pointer'>register</p>
	            </nav>
	            <h1> Sign in</h1>
	        </div>
       );
    }
    else if(issignin === 'register')
    {
        return(
             	    <div>
	                    <nav style={{display:'flex',justifyContent:'flex-end'}}>
	                     <p
	                     onClick={()=>changeroute('signin','signin')} 
	                     className='f3 link dim black pa3 underline pointer'>signin</p>
                        </nav>
                        <h1>Register</h1>
                    </div>
                );
    }
    else if(issignin ==='home')
   {
        return(
     	    <div>
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                 <p
                 onClick={()=>changeroute('signin','signin')} 
                 className='f3 link dim black pa3 underline pointer'>sign out</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;
          