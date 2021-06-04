import hamsters from '../../media/hamster-logo-notext.png'
import { Link } from 'react-router-dom'
import './Home.css'
import star from '../../media/star.svg'
import RedButton from '../button/RedButton.jsx'
import EnterPage from '../enterpage/EnterPage.jsx'

const Home = ({ data }) => {

	return (
		!sessionStorage.getItem('enter')
			? <EnterPage />
			: <div className="home-main">
				{!data ?
					<div className="reload">
						<h2>Oh no! </h2>
						<p>We couldn't get the hamsters from the server...</p>
						<p>Come back later or try to reload.</p>
						<div onClick={() => window.location.reload()}>
							<RedButton btnName="reload" />
						</div>
					</div>
					:
					<>
						<h2>Welcome to Hamsterwars</h2>
						<section className="underline">
							<hr />
							<img src={star} alt="star" className="star" />
							<hr />
						</section>
						<p>HOW IT WORKS:</p>
						<p className="instructions">
							1. In Battle two of our Hamsters will fight each other in cuteness. It's up to you who wins! Vote for the cutest!
							<br />2. Check out our contestants in the Gallery, in here you can add and delete hamsters.
							<br/>
							3. If you want more information about our battles check out Statistics or History!
			</p>
						<section className="btn-logo">
							<Link to="/battle" className="main-btns">
								<RedButton btnName="battle" />
							</Link>
							<img src={hamsters} alt="hamsterwars logo" className="hamster-logo" />
							<Link to="/gallery" className="main-btns">
								<RedButton btnName="gallery" />
							</Link>
						</section>
					</>}
			</div>
	)
}

export default Home