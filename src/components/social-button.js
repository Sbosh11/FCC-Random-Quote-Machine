import React from 'react';


const SocialButton = ({buttonIcon,clickHandler}) => (
 <div>
      <button className='socialButton' onClick={clickHandler} >
     {buttonIcon}
      
      </button>
    

  </div>
);
export default SocialButton;