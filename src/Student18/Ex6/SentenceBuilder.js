import { useRef, useState } from "react";
import React from 'react';

export const SentenceBuilder = () => {
    let textInput = document.getElementsByTagName('input')

    const onReset = () => { 
        
     }

	return (
		<div>
			<h1>Sentence Builder</h1>
			<p>Sentence: <span>{textInput}</span></p>
            <input inputMode='text' ></input>
            <button>Add Word</button>
            <button onClick={() => onReset()}>Reset</button>
		</div>
	);
};


