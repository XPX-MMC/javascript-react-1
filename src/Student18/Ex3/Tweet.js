import React from 'react';
import './Tweet.css';

export const Tweet = (props) => {
	let className = 'White';

	if (props.color === 'red') {
		className = 'red';
	} else if (props.color === 'green') {
		className = 'green';
	} else if (props.color === 'yellow') {
		className = 'yellow';
	}

	return (
		<div className='Tweet'>
			<div className={className}>{props.tweetContent}</div>
		</div>
	);
};
