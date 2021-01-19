import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar(props) {
    return (
			<nav className='nav'>
				<Link to='/randoverse' className='nav-item'>
					Home
				</Link>
				<Link to='/' className='nav-item'>
					Add your verse
				</Link>
				<Link to='allverses' className='nav-item'>
					View all verses
				</Link>
			</nav>
		);
}

export default Navbar;