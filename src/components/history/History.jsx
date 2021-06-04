import './History.css'
import Match from './Match.jsx'
import star from '../../media/star.svg'

import { useState, useEffect } from 'react'
import axios from 'axios'

const History = () => {
	const [matchHistory, setMatchHistory] = useState([])
	const [update, setUpdate] = useState(0)

	useEffect(() => {

		const getMatchHistory = async () => {
			try {
				const response = await axios.get('/matches/latest')
				setMatchHistory(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMatchHistory()
	}, [update])

	return (
		<div className="history">
			<h2>10 most recent battles</h2>
			<section className="underline">
				<hr />
				<img src={star} alt="star" className="star" />
				<hr />
			</section>
			{matchHistory.map(match => (
				<Match
					key={match.id}
					matchWinner={match.winnerId}
					matchLoser={match.loserId}
					matchId={match.id}
					setUpdate={setUpdate} />
			))}
		</div>
	)
}

export default History