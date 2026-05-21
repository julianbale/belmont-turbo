const links = [
  {
    archiveUrl: 'http://web.archive.org/web/20020119111435/http://www.gsi.fr.fm:80/',
    label: 'www.gsi.fr.fm',
    desc: 'Fastest Astra in France — 315 bhp',
  },
  {
    archiveUrl: 'http://web.archive.org/web/20010307064756/http://www.maxpower.co.uk:80',
    label: 'www.maxpower.co.uk',
    desc: 'Max Power magazine',
  },
]

import { usePageTitle } from '../hooks/usePageTitle'

export default function Links() {
  usePageTitle('Links')
  return (
    <>
      <h2 className="page-title">Links</h2>
      <p className="links-note">
        These links were collected in December 2001. Where an archived snapshot exists,
        the link opens the Wayback Machine version from that era.
      </p>
      <ul className="links-list">
        {links.map(({ archiveUrl, label, desc }) => (
          <li key={label} className="links-item">
            <a href={archiveUrl} target="_blank" rel="noopener noreferrer" className="links-url">
              {label}
            </a>
            <span className="links-desc">{desc}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
