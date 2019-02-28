import React from 'react';
import NextButton from './next-button';
import SocialButton from './social-button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';

const QuoteGenerator = ({assignNewQuote, selectedQuote}) => (
   

   
    <div id='text' className= 'Card'>
    <p >{`"${selectedQuote.quote}" ` }</p>
    <p id='author'>{`-${selectedQuote.author}`}</p>
 <div className='Links'>
  <NextButton  buttonName='Next Quote'  clickHandler={assignNewQuote}/>

  
<SocialButton  buttonIcon={
<a id='tweet-quote' href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}-${selectedQuote.author}`)}  target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon  icon={faTwitter} size='2x' />

</a>
} 
/>

  

  
  </div>
  </div>

);

export default QuoteGenerator;

