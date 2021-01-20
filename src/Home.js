import React, { useState, useEffect } from 'react';
import { APIURL } from './config';
import Navbar from './Navbar';
import stars from './stars.mp4';
import './index.css';

function Home(props) {
	const [error, setError] = useState(false);
	const [displayedVerse, setDisplayedVerse] = useState('');

	useEffect(() => {
        const url = `${APIURL}/verses`;
		fetch(url)
        .then((response) => response.json())
        .then((data) => {
                let randNum = Math.floor(Math.random() * (data.length - 1));
                setDisplayedVerse(data[randNum]);
			})
			.catch(() => {
				setError(true);
			});
	}, []);

	if (error) {
		return (
			<div>
				Sorry, there was a problem. Please refresh the page.
			</div>
		);
	}

	return (
		<div>
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

			<Navbar path='/navbar' component={Navbar} />

			<h1 className='title'>My Verse</h1>

			<h3 className='single-verse'>{displayedVerse.body}</h3>
			<h3 className='single-verse'>- {displayedVerse.author}</h3>
		</div>
	);
}

export default Home;
