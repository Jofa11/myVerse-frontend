import React, { useState } from 'react';
import { APIURL } from './config';

function AddVerse(props) {
	const initialVerseState = {
		body: '',
		author: 'anonymous',
	};

	const [verse, setVerse] = useState(initialVerseState);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setVerse({
			...verse,
			[event.target.body]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/verses/`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF=8',
			},
			body: JSON.stringify(verse),
		})
			.then((response) => response.json())
			.catch(() => {
				setError(true);
			});
	};

	return <div></div>;
}

export default AddVerse;
