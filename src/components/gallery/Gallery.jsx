import './Gallery.css'
import GalleryCard from './GalleryCard.jsx'

const Gallery = ({ hamsters }) => {

	return (
		<div className="gallery">
			<div className="grid">
				{hamsters.map(hamster => (
					<GalleryCard
						key={hamster.id}
						hamster={hamster}
					/>
				))}
			</div>
		</div>
	)
}

export default Gallery