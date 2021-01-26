import React, { useState, useEffect } from 'react';
import { APIURL } from './config';
import { Link } from 'react-router-dom';
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
			<video autoPlay muted loop playsInline id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

			<nav className='page-head-nav'>
				<Navbar path='/navbar' component={Navbar} />
			</nav>
			<header className='page-head'>
				<h1 className='title'>My Verse</h1>
			</header>
			<div className='id-container'>
				<h3 className='id-verse'>{singleVerse}</h3>
			</div>
			<div className='id-author-container'>
				<h3 className='id-verse'>- {singleAuthor}</h3>
			</div>
			<footer className='another'>
				<Link to='/addverse' className='another-link'>
					Add another verse
				</Link>
			</footer>
		</div>
	);
}

export default IdVerse;
