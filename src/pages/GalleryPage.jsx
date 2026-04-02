import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { galleries } from '../data/galleryData'
import Lightbox from '../components/Lightbox'
import { img } from '../utils'

export default function GalleryPage() {
  const { section } = useParams()
  const gallery = galleries[section]
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  if (!gallery) {
    return (
      <>
        <p>Gallery not found.</p>
        <Link to="/gallery" className="back-btn">← Gallery</Link>
      </>
    )
  }

  const hasHiRes = gallery.images.some((i) => i.hiRes)

  return (
    <>
      <div className="gallery-header">
        <h2 className="page-title" style={{ marginBottom: 0 }}>{gallery.title}</h2>
        <Link to="/gallery" className="back-btn">← Gallery</Link>
      </div>

      <div className="gallery-grid">
        {gallery.images.map(({ src, alt, hiRes }) => (
          <div
            key={src}
            className={`gallery-thumb${hiRes ? ' zoomable' : ''}`}
            onClick={() => {
              if (hiRes) {
                setLightboxSrc(img(hiRes))
                setLightboxAlt(alt)
              }
            }}
          >
            <img src={img(src)} alt={alt} loading="lazy" />
          </div>
        ))}
      </div>

      {hasHiRes && (
        <p className="gallery-hint">Hover over images for full-size view option</p>
      )}

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={lightboxAlt}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </>
  )
}
