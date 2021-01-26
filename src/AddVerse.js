import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config';
import Navbar from './Navbar';
import './index.css';
import stars from './stars.mp4';

function AddVerse(props) {
	const initialVerseState = {
		body: '',
		author: 'Anonymous',
	};
	const [createdID, setCreatedID] = useState(null);
	const [verse, setVerse] = useState(initialVerseState);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setVerse({
			...verse,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/verses/`;

		fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(verse),
		})
			.then((response) => response.json())
			.then((verse) => {
				console.log('Success:', verse);
				setCreatedID(verse._id);
				console.log(verse._id);
			})
			.catch(() => {
				console.log('Error:', error);
				setError(true);
			});
	};

	if (error) {
		return <div>Sorry, there was a problem. Please refresh the page.</div>;
	}

	if (createdID) {
		return <Redirect to={`/verses/${createdID}`} />;
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
			<div className='form-container'>
				<form onSubmit={handleSubmit} className='verse-form'>
					<h3 className='form-name'>Your Verse</h3>
					<input
						placeholder='Your Verse'
						name='body'
						type='text'
						onChange={handleChange}
						className='input-field'
					/>
					<h3 className='form-name'>Name</h3>
					<input
						placeholder='Optional'
						name='author'
						type='text'
						onChange={handleChange}
						className='input-field-name'
					/>
					<br/>
					<input type='submit' value='Send It' className='input-button' />
				</form>
			</div>
		</div>
	);
}

export default AddVerse;
