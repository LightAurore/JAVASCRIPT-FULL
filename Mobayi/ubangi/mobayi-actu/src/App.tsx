
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './containers/nav-bar/nav-bar'
import Header from './containers/header/header'
import Footer from './containers/footer/footer'
import Topnav from './containers/top-nav/top-nav'
import AsideLeft from './containers/aside-left/aside-left'

function App() {

  return (
    <>
      <Topnav />
      <Header />
      <Navbar />
      
      <main>
        <Outlet />
        <AsideLeft />
      </main>

      <Footer />
    </>
  )
}

export default App
