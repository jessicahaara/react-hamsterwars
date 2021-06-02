import './Battle.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BattleCard from './BattleCard.jsx'
const Battle = () => {
	const [randomHamsters, setRandomHamsters] = useState({
		hamster1: {},
		hamster2: {}
	})

	const randomHamster = async () => {
		try {
			const response = await axios.get('http://localhost:1111/hamsters/random')
			return response.data
		} catch (error) {
			console.log(error);
		}
	}

	const setHamsters = async () => {
		const hamster1 = await randomHamster()
		const hamster2 = await randomHamster()

		if (hamster1.id === hamster2.id) {
			setHamsters()
		} else {
			const hamsters = {
				hamster1,
				hamster2
			}
			setRandomHamsters(hamsters)
		}
	}

	const battleCompleted = (winner, loser) => {
		winner.games++
		loser.games++
		winner.wins++
		loser.defeats++
		alert(`${winner.name} wins! ${winner.wins}`)
	}

	useEffect(() => {
		setHamsters()
	}, [])

	return (
		<div className="battle">
			<div onClick={() => battleCompleted(randomHamsters.hamster1, randomHamsters.hamster1)}>
				<BattleCard hamster={randomHamsters.hamster1} />
			</div>

			<p className="vs">VS</p>

			<div onClick={() => battleCompleted(randomHamsters.hamster2, randomHamsters.hamster1)}>
				<BattleCard hamster={randomHamsters.hamster2} />
			</div>
		</div>
	)
}

export default Battle