import { useState } from 'react'
import './NewHamster.css'
import BlueButton from '../button/BlueButton.jsx'
import axios from 'axios';

const NewHamster = ({ setShowAddNew, setUpdateData }) => {
	const [newHamster, setNewHamster] = useState({
		name: '',
		age: '',
		imgName: '',
		loves: '',
		favFood: '',
		games: 0,
		defeats: 0,
		wins: 0
	})

	const [addSucceded, setAddSucceded] = useState(false)

	const setHamster = (key, value) => {
		const hamster = { ...newHamster }
		hamster[key] = value
		setNewHamster(hamster)
	}

	const addHamster = async () => {
		const hamsterToAdd = { ...newHamster }
		hamsterToAdd.age = Number(newHamster.age)
		const url = 'http://localhost:1111/hamsters'
		try {
			const response = await axios.post(url, hamsterToAdd)
			if (response.status === 200) {
				setAddSucceded(true)
				setUpdateData(Date.now())
			}
		} catch (error) {
			console.log(error);
		}

	}

	return (
		<div className="new-hamster">
			<section className="lightbox">
				{!addSucceded
					? <>
						<h3>
							Add new hamster
		 		</h3>
						<div className="form">
							<label>Name:
					<input type="text" onChange={event => { setHamster("name", event.target.value); }} value={newHamster.name} />
							</label>

							<label>Age:
					<input type="text" onChange={event => { setHamster("age", event.target.value); }} value={newHamster.age} />
							</label>

							<label>Image name:
					<input type="text" onChange={event => { setHamster("imgName", event.target.value); }} value={newHamster.imgName} />
							</label>

							<label>Loves to:
					<input type="text" onChange={event => { setHamster("loves", event.target.value); }} value={newHamster.loves} />
							</label>

							<label>Favorite food:
					<input type="text" onChange={event => { setHamster("favFood", event.target.value); }} value={newHamster.favFood} />
							</label>
						</div>
						<div onClick={() => addHamster()}>
							<BlueButton btnName="add" />
						</div>
					</>
					: <>
						<h3>
							Welcome {newHamster.name}!
					</h3>
						<p>Your hamster is now added to Hamsterwars.</p>
						<p>Good Luck!</p>
						<div className="ok-btn"
							onClick={() => setShowAddNew(false)}>
							<BlueButton btnName="OK" />
						</div>
					</>}
				<p className="close"
					onClick={() => setShowAddNew(false)}>x</p>
			</section>
		</div>
	)
}

export default NewHamster