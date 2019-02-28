import React from 'react';


//import Link  from "react-dom";




const SocialButton = ({buttonIcon,clickHandler}) => (
 <div>
      <button className='socialButton' onClick={clickHandler} >
     {buttonIcon}
      
      </button>
    

  </div>
);
export default SocialButton;