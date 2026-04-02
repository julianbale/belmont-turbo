const links = [
  { url: 'http://gsi.fr.fm/',                                       label: 'www.gsi.fr.fm',               desc: 'Fastest Astra in France — 315 bhp' },
  { url: 'http://www.vpcc.co.uk/',                                   label: 'www.vpcc.co.uk',              desc: 'Vauxhall Performance Car Club' },
  { url: 'http://www.maxpower.co.uk/',                               label: 'www.maxpower.co.uk',          desc: 'Max Power magazine' },
  { url: 'http://www.stickerland.fsnet.co.uk/astra/mk2astra.htm',   label: 'www.stickerland.fsnet.co.uk', desc: "Tom Stickland's Astra Info" },
]

export default function Links() {
  return (
    <>
      <h2 className="page-title">Links</h2>
      <ul className="links-list">
        {links.map(({ url, label, desc }) => (
          <li key={url} className="links-item">
            <a href={url} target="_blank" rel="noopener noreferrer" className="links-url">
              {label}
            </a>
            <span className="links-desc">{desc}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
