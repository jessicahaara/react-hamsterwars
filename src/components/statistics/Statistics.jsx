import './Statistics.css'
import StatBoard from './StatBoard.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Statistics = () => {
	const [mostWins, setMostWins] = useState([])
	const [mostDefeats, setMostDefeats] = useState([])

	useEffect(() => {
		const getWinners = async () => {
			try {
				const response = await axios.get('/winners')
				setMostWins(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		const getLosers = async () => {
			try {
				const response = await axios.get('/losers')
				setMostDefeats(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getWinners()
		getLosers()

	}, [])

	return (
		<div className="stats">
			<section className="win-board">
				<h2>5 top winners</h2>
			<StatBoard hamsters={mostWins} />
			</section>

			<section className="lose-board">
			<h2>5 top losers</h2>
			<StatBoard hamsters={mostDefeats} />
			</section>
		</div>
	)
}

export default Statistics