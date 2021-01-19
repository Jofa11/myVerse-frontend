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

	if (createdID) {
		return <Redirect to={`/verses/${createdID}`} />;
	}

	return (
		<div>
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

			<Navbar path='/navbar' component={Navbar} />

			<h1 className='title'>My Verse</h1>

			<form onSubmit={handleSubmit} className='verse-form'>
				<h3>Your Verse</h3>
				<input
					placeholder='Your Verse'
					value={verse.body}
					name='body'
					type='text'
					onChange={handleChange}
					className='input-field'
				/>
				<h3>Name (optional)</h3>
				<input
					placeholder='Name (optional)'
					value={verse.author}
					name='author'
					type='text'
					onChange={handleChange}
					className='input-field'
				/>
				<input type='submit' value='Submit' className='input-button' />
			</form>
		</div>
	);
}

export default AddVerse;
