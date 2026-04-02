import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Introduction from './pages/Introduction'
import Story from './pages/Story'
import TechSpec from './pages/TechSpec'
import Links from './pages/Links'
import GalleryIndex from './pages/GalleryIndex'
import GalleryPage from './pages/GalleryPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/story" element={<Story />} />
        <Route path="/techspec" element={<TechSpec />} />
        <Route path="/links" element={<Links />} />
        <Route path="/gallery" element={<GalleryIndex />} />
        <Route path="/gallery/:section" element={<GalleryPage />} />
      </Route>
    </Routes>
  )
}
