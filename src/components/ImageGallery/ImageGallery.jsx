import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export const ImageGallery = ({images, openModal}) => {
  return (
    <ul className={css.listImages}>
	{images.map(({id, urls, alt_description}) => {
        return 	<li className={css.itemImages} key={id}>
        <ImageCard urls={urls} alt={alt_description} openModal={openModal}/>
        </li>
    })}
</ul>
  )
}
