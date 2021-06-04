import './Statistics.css'

const StatBoard = ({ hamsters }) => {
	return (
		<div className="stat-board">
			{hamsters.map(hamster => (
				<section className="hamster">
					<img src={`/img/${hamster.imgName}`} alt={hamster.name} />
					<h3>{hamster.name}</h3>
					<p>Games: {hamster.games}</p>
					<p>Wins: {hamster.wins}</p>
					<p className="last">Defeats: {hamster.defeats}</p>
				</section>
			))}
		</div>
	)
}

export default StatBoard