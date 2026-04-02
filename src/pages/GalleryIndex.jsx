import { Link } from 'react-router-dom'
import { gallerySections } from '../data/galleryData'
import { img } from '../utils'

export default function GalleryIndex() {
  return (
    <>
      <h2 className="page-title">Gallery</h2>
      <div className="gallery-cats">
        {gallerySections.map(({ key, label, preview }) => (
          <Link key={key} to={`/gallery/${key}`} className="gallery-cat-card">
            <img src={img(preview)} alt={label} loading="lazy" />
            <div className="gallery-cat-label">{label}</div>
          </Link>
        ))}
      </div>
    </>
  )
}
