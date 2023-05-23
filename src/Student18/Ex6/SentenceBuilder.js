
import React, { useRef, useState } from 'react';

export const SentenceBuilder = () => {
    
        const [inputValue, setInputValue] = useState('');
        const string = useRef('')  
        
	return (
		<>
			<h1>Sentence Builder</h1>
			<p>Sentence: <span>{inputValue}</span></p>
            <input type='text' value={inputValue} onChange={(text)=>{setInputValue(text.target.value)}}></input>
            <button onClick={()=> string.push}>Add Word</button>
            <button onClick={()=> setInputValue('')}>Reset</button>
		</>
        
	);
};


