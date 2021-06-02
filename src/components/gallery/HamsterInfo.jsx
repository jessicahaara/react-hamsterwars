import { useState, useEffect } from 'react'
import './HamsterInfo.css'
import star from '../../media/star.svg'
import axios from 'axios';

const HamsterInfo = (props) => {
	// const [matchData, setMatchData] = useState([])

	// useEffect(() => {
	// 	const url = 'http://localhost:1111/matchwinner/' + props.hamster.id

	// 	const getMatchWinners = async () => {
	// 		try {
	// 			const response = await axios.get(url)
	// 			setMatchData(response.data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}

	// 	getMatchWinners()
	// }, [])

	const deleteHamster = async () => {
		if (window.confirm(`Are you sure you want to delete ${props.hamster.name} from Hamsterwars?`)) {
			const url = '/hamsters/' + props.hamster.id
			try {
				const response = await axios.delete(url)
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		}
	}

	const imgSrc = '/img/' + props.hamster.imgName
	const imgAlt = props.hamster.name + ' picture'

	return (
		<div className="hamster-info">
			<section className="lightbox">
				<section className="top-lightbox">
					<hr />
					<img src={star} alt="star" className="star" />
					<hr />
				</section>
				<h2>{props.hamster.name}</h2>
				<hr className="under" />

				<section className="content-lightbox">
					<img src={imgSrc} alt={imgAlt} className="hamster-pic" />
					<section className="info">
						<h3>
							Hamster info:
						</h3>
						<p>Age: {props.hamster.age}</p>
						<p>Favorite food: {props.hamster.favFood}</p>
						<p>Loves: {props.hamster.loves}</p>
						<h3 className="h3-margin">
							Battle info:
						</h3>
						<p>Battles: {props.hamster.games}</p>
						<p>Wins: {props.hamster.wins}</p>
						<p>Defeats: {props.hamster.defeats}</p>
						<p>Won against: <br />
						Ella <br />
						Peter<br /></p>
					</section>
				</section>

				<p className="close"
					onClick={() => props.setShowHamsterInfo(false)}>x
				</p>

				<button onClick={deleteHamster}>DELETE</button>
			</section>
		</div>
	)
}

export default HamsterInfo