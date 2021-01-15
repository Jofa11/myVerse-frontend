import React, { useState } from 'react';
import { APIURL } from './config';

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
            .then(verse => {
                console.log('Success:', verse);
            })
			.catch(() => {
                console.log('Error:', error);
				setError(true);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
                placeholder='Your Verse'
                value={verse.body}
				name='body'
				type='text'
                onChange={handleChange}
            />
			<input type='submit' value='Submit' />
		</form>
	);
}

export default AddVerse;
