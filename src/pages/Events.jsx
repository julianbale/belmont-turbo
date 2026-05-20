import { useState } from 'react'
import { Link } from 'react-router-dom'
import { galleries } from '../data/galleryData'
import Lightbox from '../components/Lightbox'
import { img, video } from '../utils'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Events() {
  usePageTitle('Events')
  const gallery = galleries.events
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

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

      {/* Video section */}
      <div className="video-section">
        <h3 className="video-section-title">On-Board Video — Nancy, France</h3>
        <p className="video-desc">
          Carol running the quarter mile in Nancy, France — recorded November 2001.
        </p>

        <div className="video-grid">
          <div className="video-card">
            <div className="video-label">Quarter Mile — Nancy, France, Nov 2001</div>
            <video
              controls
              preload="metadata"
              className="video-player"
            >
              <source src={video('carol-runs-hq.mp4')} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </div>

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
