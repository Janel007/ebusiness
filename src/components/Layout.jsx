import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}