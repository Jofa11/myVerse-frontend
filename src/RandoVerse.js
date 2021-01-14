import React, { useState, useEffect } from 'react';
import { APIURL } from './config';

function RandoVerse(props) {
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

    
    function randNum() {
        return Math.floor(Math.random() * (verse.length - 1));
    }
	return (
        <div>
			<ul>{verse.map((verse) => (
                <li>{verse.body}</li>
            ))}</ul>
            {/* console.log(verse); */}
            <h3>{verse[randNum()].body}</h3>
            {/* <button onClick={handleSubmit}>Verse</button> */}
		</div>
	);
}

export default RandoVerse;
