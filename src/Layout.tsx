import { Outlet } from 'react-router-dom'
import NavBar from './components/shared/NavBar'
import Footer from './components/shared/Footer'
import ScrollToAnchor from './ScrollToAnchor'

const Layout = () => {
  return (
    <div>
      <ScrollToAnchor />
      <NavBar />
      <main className='min-h-96'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout