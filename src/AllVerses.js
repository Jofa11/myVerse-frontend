import React, { useState, useEffect } from 'react';
import { APIURL } from './config';

function AllVerses(props) {
	const [verse, setVerse] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/verses`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setVerse(data);	
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
		</div>
	);
}

export default AllVerses;
