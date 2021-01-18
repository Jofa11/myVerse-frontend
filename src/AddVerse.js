import React, { useState } from 'react';
import { APIURL } from './config';
import './index.css';
import stars from './stars.mp4';

function AddVerse(props) {
	const initialVerseState = {
		body: '',
		author: 'Anonymous',
	};

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
			})
			.catch(() => {
				console.log('Error:', error);
				setError(true);
			});
	};

	return (
		<div>
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

            <h1 className='title'>My Verse</h1>

			<form onSubmit={handleSubmit} className='verse-form'>
				<input
					placeholder='Your Verse'
					value={verse.body}
					name='body'
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
