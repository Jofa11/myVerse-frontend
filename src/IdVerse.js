import React, { useState, useEffect } from 'react';
import { APIURL } from './config';
import Navbar from './Navbar';
import stars from './stars.mp4';
import './index.css';

function IdVerse({ match }) {
    const [singleVerse, setSingleVerse] = useState('');
    const [singleAuthor, setSingleAuthor] = useState('Anonymous');
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/verses/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((verse) => {
                setSingleVerse(verse.body);
                setSingleAuthor(verse.author);
			})
			.catch(() => {
				setError(true);
			});
    }, [match.params.id]);
    
    if (error) {
			return <div>Sorry, there was a problem. Please refresh the page.</div>;
		}

	return (
		<div>
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

			<Navbar path='/navbar' component={Navbar} />

			<h1 className='title'>My Verse</h1>
			<h3 className='id-verse'>{singleVerse}</h3>
			<h3 className='id-verse'>- {singleAuthor}</h3>
		</div>
	);
}

export default IdVerse;
