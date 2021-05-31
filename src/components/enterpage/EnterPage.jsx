import RedButton from '../button/RedButton.jsx'
import video from '../../media/HAMSTERWARS.mp4'
import './EnterPage.css'

const EnterPage = () => {
	const enter = () => {
		sessionStorage.setItem('enter', true)
		window.location.reload();
	}
	return (
		<div className="enter-page">
			<div onClick={enter} >
				<RedButton btnName="enter" />
			</div>
			<video autoPlay muted>
				<source src={video} type="video/mp4"></source>
			</video>
		</div>
	)
}

export default EnterPage