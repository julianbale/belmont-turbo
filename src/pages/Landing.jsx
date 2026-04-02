import { Link } from 'react-router-dom'
import { img } from '../utils'

const stats = [
  { value: '6.10 sec',          label: '0–60 @ Silverstone' },
  { value: '225 bhp',           label: 'Rolling Road @ PTS' },
  { value: '14.34 sec / 102.5 mph', label: 'Standing ¼ Mile — Santa Pod' },
  { value: '156 mph',           label: 'Max Speed — Somewhere in Europe' },
]

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="landing-title">Vauxhall Belmont Turbo</h1>
      <p className="landing-sub">Welcome to the site</p>

      <Link to="/introduction" className="landing-car-link">
        <img src={img('UnderBridge.jpg')} alt="Belmont Turbo" className="landing-car" />
      </Link>
      <p className="landing-prompt">Click the car to enter</p>

      <div className="stats-grid">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-card">
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <Link to="/introduction" className="enter-btn">Enter Site</Link>

      <div className="landing-footer">
        <p>Last changed 22nd December 2001</p>
        <p>Updated thanks to Claude Code 2026</p>
      </div>
    </div>
  )
}
