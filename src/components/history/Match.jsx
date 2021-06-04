import { useState, useEffect } from 'react'
import axios from 'axios'
import './History.css'

const Match = ({ matchWinner, matchLoser, matchId, setUpdate }) => {
	const [winner, setWinner] = useState({})
	const [loser, setLoser] = useState({})


	useEffect(() => {
		const getHamster = async (id) => {
			const url = '/hamsters/' + id
			try {
				const response = await axios.get(url)
				return response.data
			} catch (error) {
				return error
			}
		}

		const setHamsters = async () => {
			const win = await getHamster(matchWinner)
			setWinner(win)

			const los = await getHamster(matchLoser)
			setLoser(los)
		}

		setHamsters()

	}, [])

	const deleteMatch = async () => {
		if (window.confirm(`Are you sure you want to delete this battle from Hamsterwars?`)) {
			const url = '/matches/' + matchId
			try {
				const response = await axios.delete(url)
				if (response.status === 200) {
					setUpdate(Date.now)
				}
			} catch (error) {
				console.log(error);
			}
		}
	}


	return (
		<div className="match">
			<section className="win">
				<h3>WINNER: {winner.name}</h3>
				<img src={`/img/${winner.imgName}`} alt={winner.name} />
			</section>
			<p className="vs">VS</p>
			<section className="los">
				<h3>LOSER: {loser.name}</h3>
				<img src={`/img/${loser.imgName}`} alt={loser.name} />
			</section>
			<p className="delete"
				onClick={() => deleteMatch()}>x</p>
		</div>
	)
}

export default Match