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
		return <div>Sorry, there was a problem. Please refresh the page.</div>;
	}

	return (
		<div>
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>
			<nav className='page-head-nav'>
				<Navbar path='/navbar' component={Navbar} />
			</nav>
			<header className='page-head'>
				<h1 className='title'>My Verse</h1>
			</header>

			<main>
				<div className='flex-center'>
					<h3 className='single-verse'>{displayedVerse.body}</h3>
				</div>
				<div className='flex-center'>
					<h3 className='single-verse-a'>- {displayedVerse.author}</h3>
				</div>
				<div className='flex-center'>
					<p className='about p-background'>
						Do you have something to say? Maybe blasting it across social media
						isn't the route you want to take. Say hello to My Verse. Get
						whatever you need to off your chest and send it out into the
						universe. Good or bad, just let it go. Now go ahead, add your verse.
					</p>
				</div>
			</main>
		</div>
	);
}

export default Home;
