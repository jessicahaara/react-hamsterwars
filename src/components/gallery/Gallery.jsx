import { useState } from 'react'
import './Gallery.css'
import GalleryCard from './GalleryCard.jsx'
import NewHamster from './NewHamster.jsx'
import HamsterInfo from './HamsterInfo.jsx'
import axios from 'axios';

const Gallery = ({ hamsters, setUpdateData }) => {
	const [showAddNew, setShowAddNew] = useState(false)
	const [showHamsterInfo, setShowHamsterInfo] = useState(false)
	const [choosenHamster, setChoosenHamster] = useState({})
	const [defeatedNamesList, setDefeatedNamesList] = useState([])

	const getHamster = async (id) => {
		const url = 'http://localhost:1111/hamsters/' + id
		try {
			const response = await axios.get(url)
			return response.data.name
		} catch (error) {
			return error
		}
	}


	const getMatchWinners = async (id) => {
		const url = 'http://localhost:1111/matchwinners/' + id
		try {
			const response = await axios.get(url)
			return response.data
		} catch (error) {
			return false
		}
	}

	const getNames = async (idList) => {
		const allNames = await Promise.all(idList.map(id => getHamster(id)))

		let sortedNames = []
		for (let i = 0; i < allNames.length; i++) {
			if (i === 0) {
				sortedNames.push({ name: allNames[i], times: 1 })
			} else {
				let exists = false
				for (let j = 0; j < sortedNames.length; j++) {
					if (allNames[i] === sortedNames[j].name) {
						exists = true
						sortedNames[j].times++
					}
				}
				if (!exists) {
					sortedNames.push({ name: allNames[i], times: 1 })
				}
			}
		}

		return sortedNames
	}



	const moreInfo = async (hamster) => {
		setChoosenHamster(hamster)
		const matchWinner = await getMatchWinners(hamster.id)

		if (matchWinner) {
			const defeatedIdList = matchWinner.map(match => {
				return match.loserId
			})

			const defeatedNames = await getNames(defeatedIdList)
			setDefeatedNamesList(defeatedNames)
		} else {
			setDefeatedNamesList(false)
		}

		setShowHamsterInfo(true)

	}

	return (
		<div className="gallery">
			<div className="grid">
				{hamsters.map(hamster => (
					<div key={hamster.id}
						onClick={() => moreInfo(hamster)}>
						<GalleryCard
							hamster={hamster}
						/>
					</div>
				))}
				<div className="add-new"
					onClick={() => setShowAddNew(true)}>
					<h3>Add new hamster</h3>
					<p className="plus">+</p>
				</div>
			</div>

			{showAddNew ? <NewHamster setShowAddNew={setShowAddNew} setUpdateData={setUpdateData} /> : ''}

			{showHamsterInfo ? <HamsterInfo hamster={choosenHamster} setShowHamsterInfo={setShowHamsterInfo} setUpdateData={setUpdateData} defeatedNamesList={defeatedNamesList} /> : ''}
		</div>
	)
}

export default Gallery