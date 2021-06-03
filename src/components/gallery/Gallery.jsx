import { useState } from 'react'
import './Gallery.css'
import GalleryCard from './GalleryCard.jsx'
import NewHamster from './NewHamster.jsx'
import HamsterInfo from './HamsterInfo.jsx'

const Gallery = ({ hamsters, setUpdateData }) => {
	const [showAddNew, setShowAddNew] = useState(false)
	const [showHamsterInfo, setShowHamsterInfo] = useState(false)
	const [choosenHamster, setChoosenHamster] = useState({})

	const moreInfo = (hamster) => {
		setShowHamsterInfo(true)
		setChoosenHamster(hamster)
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

			{showHamsterInfo ? <HamsterInfo hamster={choosenHamster} setShowHamsterInfo={setShowHamsterInfo} setUpdateData={setUpdateData} /> : ''}
		</div>
	)
}

export default Gallery