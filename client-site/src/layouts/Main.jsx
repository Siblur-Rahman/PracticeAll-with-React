import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import NavbarItem from '../components/NavbarItem'

const Main = () => {
  return (
    <div className='px-4'>
      {/* Header */}
      <Header/>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)] md:px-10 lg:px-16 lg:w-3/4 lg:mx-auto'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main