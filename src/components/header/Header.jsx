import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
	const [activePage, setActivePage] = useState('home')
	const pages = ['home', 'battle', 'gallery', 'statistics', 'history']

	const navPages = pages.map((page, index) => {
		let linkAddress = '/'
		if (page !== 'home') {
			linkAddress = `/${page}`;
		}
		return (
			< li key={index}>
				<Link to={linkAddress}
					className={activePage === page ? 'active' : ''}
					onClick={() => setActivePage(page)}>
					{page}
				</Link>
			</li >
		)
	})

	return (
		<>
			<nav>
				<ul>
					{navPages}
				</ul>
			</nav>
		</>
	)
}

export default Header