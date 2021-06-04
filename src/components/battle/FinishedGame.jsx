import './FinishedGame.css'
import BlueButton from '../button/BlueButton.jsx'
import firework from '../../media/firework.gif'

const FinishedGame = ({ hamsters, setGameFinished }) => {

	return (
		<div className="finished-game">
			<h2>{hamsters.winner.name} wins!</h2>
			<section className="hamsters">
				<section className="winner">
					<img src={firework} alt="firework" className="firework"/>
					<h3>WINNER {hamsters.winner.name}</h3>
					<img src={`/img/${hamsters.winner.imgName}`} alt={hamsters.winner.name} />
					<h3>Battle statistics:</h3>
					<p>Wins: {hamsters.winner.wins}</p>
					<p>Defeats: {hamsters.winner.defeats}</p>
				</section>
				<section className="loser">
					<h3>LOSER {hamsters.loser.name}</h3>
					<img src={`/img/${hamsters.loser.imgName}`} alt={hamsters.loser.name} />
					<h3>Battle statistics:</h3>
					<p>Wins: {hamsters.loser.wins}</p>
					<p>Defeats: {hamsters.loser.defeats}</p>
				</section>
			</section>
			<div className="new-game-btn"
				onClick={() => setGameFinished(false)}>
				<BlueButton btnName="New Battle" />
			</div>
		</div>
	)
}

export default FinishedGame