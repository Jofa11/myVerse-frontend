import React, { useState, useEffect } from 'react';
import { APIURL } from './config';
import Navbar from './Navbar';
import stars from './stars.mp4';
import './index.css';

function IdVerse({ match }) {
	const [singleVerse, setSingleVerse] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/verses/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((verse) => {
				setSingleVerse(verse.body);
			})
			.catch(() => {
				setError(true);
			});
	}, [match.params.id]);

	return (
		<div>
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

			<Navbar path='/navbar' component={Navbar} />

			<h1 className='title'>My Verse</h1>
			<h3 className='single-verse'>{singleVerse}</h3>
		</div>
	);
}

export default IdVerse;
