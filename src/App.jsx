import './App.css'
import Navbar from './components/Home/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Home/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
