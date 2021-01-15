import React, { useState, useEffect } from 'react';
import { APIURL } from './config';

function RandoVerse(props) {
	const [verse, setVerse] = useState([]);
	const [error, setError] = useState(false);
	const [displayedVerse, setDisplayedVerse] = useState('');

	useEffect(() => {
        const url = `${APIURL}/verses`;
		fetch(url)
        .then((response) => response.json())
        .then((data) => {
                let randNum = Math.floor(Math.random() * (data.length - 1));
				console.log(data);
				setVerse(data);
                setDisplayedVerse(data[randNum]);
			})
			.catch(() => {
				setError(true);
			});
	}, []);

	return (
		<div>
			<ul>
				{verse.map((verse) => (
					<li key={verse._id}>
						{verse.body} -{verse.author}
					</li>
				))}
			</ul>

			<h3>-{displayedVerse.body}</h3>
		</div>
	);
}

export default RandoVerse;
