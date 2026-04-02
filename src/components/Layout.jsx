import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { img } from '../utils'

const navLinks = [
  { to: '/introduction', label: 'Introduction' },
  { to: '/story',        label: 'Story' },
  { to: '/techspec',     label: 'Tech Spec' },
  { to: '/links',        label: 'Links' },
  { to: '/gallery',      label: 'Gallery' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <div>
      <header className="header">
        <img src={img('Snetterton.jpg')} alt="" className="header-photo" />
        <h1 className="header-title">Julian's Vauxhall Belmont Turbo</h1>
        <img src={img('UnderBridge.jpg')} alt="" className="header-photo" />
        <button
          className="hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </header>

      {open && <div className="nav-overlay" onClick={close} />}

      <div className="site-body">
        <nav className={`sidebar${open ? ' open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
