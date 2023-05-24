import React, { useState } from 'react';

export const SentenceBuilder = () => {
    let [string, setString] = useState('');
	let [inputValue, setInputValue] = useState('');
	

	const stringBuilder = () => {
		setString((string += inputValue + ' '));
        setInputValue('')
	};

	return (
		<>
			<h1>Sentence Builder</h1>
			<p>
				Sentence: <span>{string}</span>
			</p>
			<input
				type='text'
				value={inputValue}
				onChange={(text) => {
					setInputValue(text.target.value);
				}}
			></input>
			<button onClick={() => stringBuilder()}>Add Word</button>
			<button onClick={() => setString('')}>Reset</button>
		</>
	);
};
