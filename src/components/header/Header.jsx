import './Header.css'
import stars from '../../media/stars.svg'
import { Link } from 'react-router-dom'
import hamster2 from '../../media/hamster2.png'
import hamster1 from '../../media/hamster1.png'
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
			<div className="header">
				<img src={hamster1} alt="hamster" className="hamster1-img" />
				<div className="top">
					<h1>hamsterwars</h1>
					<div className="sub-text">
						<img src={stars} alt="three stars" />
						<h3>May the cutest hamster win!</h3>
						<img src={stars} alt="three stars" />
					</div>
					<img src={hamster2} alt="hamster" className="hamster2-img" />
				</div>
			</div>
			<nav>
				<ul>
					{navPages}
				</ul>
			</nav>
		</>
	)
}

export default Header