import './Battle.css'
import star from '../../media/star.svg'

const BattleCard = ({ hamster }) => {
	const imgSrc = 'http://localhost:1111/img/' + hamster.imgName
	const imgAlt = hamster.name + ' picture'
	return (
		<div className="battle-card">
			<section className="top-battle-card">
				<hr />
				<img src={star} alt="star" className="star" />
				<hr />
			</section>
			<h2>{hamster.name}</h2>
			<hr className="under" />

			<img src={imgSrc} alt={imgAlt} className="hamster-pic" />

			<section className="bottom-battle-card">
				<p>Age:  {hamster.age}</p>
				<p>Favorite food:  {hamster.favFood}</p>
				<p>Loves: {hamster.loves}</p>
			</section>

			<div className="vote">
				<p>Vote for {hamster.name}</p>
			</div>
		</div>
	)
}

export default BattleCard