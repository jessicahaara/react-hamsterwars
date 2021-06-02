import { useState } from 'react'
import './NewHamster.css'
import BlueButton from '../button/BlueButton.jsx'
import axios from 'axios';

const NewHamster = ({ setShowAddNew }) => {
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

	const setHamster = (key, value) => {
		const hamster = { ...newHamster }
		hamster[key] = value
		setNewHamster(hamster)
	}

	const addHamster = async () => {
		const hamsterToAdd = { ...newHamster }
		hamsterToAdd.age = Number(newHamster.age)
		const url = '/hamsters'
		try {
			const response = await axios.post(url, hamsterToAdd)
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="new-hamster">
			<section className="lightbox">
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

				<p className="close"
					onClick={() => setShowAddNew(false)}>x</p>
			</section>
		</div>
	)
}

export default NewHamster