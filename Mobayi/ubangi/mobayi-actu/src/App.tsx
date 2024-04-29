
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav-bar/nav-bar'
import Header from './containers/header/header'

function App() {

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>


    </>
  )
}

export default App
