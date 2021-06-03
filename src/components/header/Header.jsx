import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const pages = ['home', 'battle', 'gallery', 'statistics', 'history']

	const navPages = pages.map((page, index) => {
		const linkAddress = `/${page}`;
		return (
			< li key={index}>
				<NavLink
					to={linkAddress}
					activeClassName="active">
					{page}
				</NavLink>
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