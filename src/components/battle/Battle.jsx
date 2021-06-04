import './Battle.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BattleCard from './BattleCard.jsx'
import FinishedGame from './FinishedGame.jsx'
const Battle = ({ setUpdateData }) => {
	const [randomHamsters, setRandomHamsters] = useState({
		hamster1: {},
		hamster2: {}
	})

	const [gameFinished, setGameFinished] = useState(false)
	const [gameResult, setGameResult] = useState({
		winner: {},
		loser: {}
	})

	const randomHamster = async () => {
		try {
			const response = await axios.get('/hamsters/random')
			return response.data
		} catch (error) {
			console.log(error);
		}
	}

	const postMatch = async (match) => {
		const url = '/matches'

		try {
			const response = await axios.post(url, match)
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	const putHamster = async (hamster) => {
		const url = '/hamsters/' + hamster.id
		console.log(hamster.id);
		try {
			const response = await axios.put(url, hamster)
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	const getHamster = async (id) => {
		const url = '/hamsters/' + id
		try {
			const response = await axios.get(url)
			return response.data
		} catch (error) {
			console.log(error);
		}
	}


	const battleCompleted = async (winner, loser) => {
		winner.games++
		winner.wins++

		loser.games++
		loser.defeats++
		await putHamster(winner)
		await putHamster(loser)

		const result = {
			winnerId: winner.id,
			loserId: loser.id
		}

		await postMatch(result)
		setGameFinished(true)

		const gameHamsters = {
			winner: await getHamster(winner.id),
			loser: await getHamster(loser.id)
		}

		setGameResult(gameHamsters)
		setUpdateData(Date.now())
	}

	useEffect(() => {
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

		setHamsters()
	}, [gameFinished])

	return (
		<div className="battle">
			{!gameFinished
				? <>
					<div onClick={() => battleCompleted(randomHamsters.hamster1, randomHamsters.hamster2)}>
						<BattleCard hamster={randomHamsters.hamster1} />
					</div>

					<p className="vs">VS</p>

					<div onClick={() => battleCompleted(randomHamsters.hamster2, randomHamsters.hamster1)}>
						<BattleCard hamster={randomHamsters.hamster2} />
					</div>
				</>
				: <FinishedGame hamsters={gameResult} setGameFinished={setGameFinished} />
			}

		</div>
	)
}

export default Battle