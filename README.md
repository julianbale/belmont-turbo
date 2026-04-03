# Vauxhall Belmont Turbo

A personal website documenting Julian Bale's Vauxhall Belmont Turbo project car — believed to be the only turbocharged Belmont MkII in the world.

## About the Site

This site covers a multi-year project to build a unique high-performance car from a standard Vauxhall Belmont. Starting life as a 1.3 Merit, the car was progressively upgraded through a 16V GTE engine swap, full turbo conversion by Courtenay Sport in Norwich, custom suspension, brakes, bodywork, and ICE install — eventually producing 265 bhp and running a 14.34 second quarter mile at Santa Pod at 102.5 mph.

The site includes:
- The full build story from stock car to turbo
- Detailed technical specifications
- Photo galleries covering the car, engine, styling, ICE, rebuild process, track events, previous cars, and motorbikes
- Links to related Vauxhall performance sites

## History

The site was first published around **2000** using **Microsoft FrontPage**, hosted at `www.belmont-turbo.com`. It used a classic three-frame layout typical of the era, with a banner frame, navigation frame, and main content frame. Styling was handled by FrontPage's built-in Industrial theme.

In **2026** the site was fully rebuilt and republished by **[Claude Code](https://claude.ai/claude-code)** (Anthropic's AI coding assistant), converting the original HTML into a modern React/Vite application while preserving all original content, images, and the teal colour scheme from the original design.

## Technical Stack

| Then (2000) | Now (2026) |
|-------------|------------|
| Microsoft FrontPage | React 18 + Vite |
| HTML framesets | React Router (HashRouter) |
| Inline styles + FrontPage themes | CSS with custom properties |
| Static file hosting | GitHub Pages via GitHub Actions |
| Java hover `.class` applets | CSS transitions |
| Fixed-width desktop layout | Fully responsive, mobile-friendly |

## Features

- **Responsive design** — works on mobile, tablet and desktop
- **Sidebar navigation** with active page highlighting and hamburger menu on mobile
- **Photo gallery** with lightbox viewer for full-size hi-res images
- **Inline image links** in the Story page open images in a lightbox
- **Auto-deploy** — every push to `main` triggers a rebuild and redeploys via GitHub Actions

## Performance Stats

| Metric | Result |
|--------|--------|
| 0–60 mph | 6.10 sec @ Silverstone |
| Rolling road | 225 bhp @ PTS |
| Standing ¼ mile | 14.34 sec / 102.5 mph @ Santa Pod |
| Top speed | 156 mph — somewhere in Europe |

## Running Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

Live site: **https://julianbale.github.io/belmont-turbo/**

---

*Original site © Julian Bale, 2000. Rebuilt with Claude Code, 2026.*
