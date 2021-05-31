import './RedButton.css'

const RedButton = (props) => {
	return (
		<button className="red-btn">
			{props.btnName}
		</button>
	)
}

export default RedButton