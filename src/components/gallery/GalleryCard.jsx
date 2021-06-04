import star from '../../media/star.svg'

const GalleryCard = ({ hamster }) => {
	const imgSrc = '/img/' + hamster.imgName
	const imgAlt = hamster.name + ' picture'
	return (
		<div className="gallery-card">
			<section className="top-card">
				<hr />
				<img src={star} alt="star" className="star" />
				<hr />
			</section>
			<h3>
				{hamster.name}
			</h3>
			<hr className="under" />

			<img src={imgSrc} alt={imgAlt} className="hamster-pic" />
		</div>
	)
}

export default GalleryCard