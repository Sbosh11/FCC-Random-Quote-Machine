import React from 'react';

const NextButton = ({buttonName, clickHandler}) => (
<button id='new-quote' className='nextButton' onClick={clickHandler}>{buttonName}</button>
);

export  default NextButton;