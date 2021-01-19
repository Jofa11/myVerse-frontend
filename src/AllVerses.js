import React, { useState, useEffect } from 'react';
import { APIURL } from './config';
import Navbar from './Navbar';
import './index.css';
import stars from './stars.mp4';

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
			<video autoPlay muted loop id='myVideo'>
				<source src={stars} type='video/mp4' />
			</video>

			<Navbar path='/navbar' component={Navbar} />

			<h1 className='title'>My Verse</h1>
            
			<ul>
				{verse.map((verse) => (
					<li key={verse._id} className='verse-list'>
						{verse.body} -{verse.author}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AllVerses;
