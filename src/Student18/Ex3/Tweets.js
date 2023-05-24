import React from 'react';
import { Tweet } from './Tweet';

import './Tweets.css';

export const Tweets = () => {
	return (
		<div className='Tweets'>
			<div>Tweet Storm</div>
			<Tweet tweetContent="It's payday!!!" color='green' />
			<Tweet tweetContent='I just bought a new car!' color='yellow' />
			<Tweet tweetContent='I just smashed my new car.' color='red' />
		</div>
	);
};
