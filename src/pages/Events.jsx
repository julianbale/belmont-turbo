import { useState } from 'react'
import { Link } from 'react-router-dom'
import { galleries } from '../data/galleryData'
import Lightbox from '../components/Lightbox'
import { img } from '../utils'

const BASE = import.meta.env.BASE_URL

export default function Events() {
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
        <h3 className="video-section-title">On-Board Video — Santa Pod</h3>
        <p className="video-desc">
          Carol running the quarter mile at Santa Pod — recorded November 2001.
        </p>

        <div className="video-grid">
          <div className="video-card">
            <div className="video-label">Standard Quality</div>
            <video
              controls
              preload="metadata"
              className="video-player"
            >
              <source src={`${BASE}Video/carol-runs.mp4`} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          <div className="video-card">
            <div className="video-label">High Quality</div>
            <video
              controls
              preload="metadata"
              className="video-player"
            >
              <source src={`${BASE}Video/carol-runs-hq.mp4`} type="video/mp4" />
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
