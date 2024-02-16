
import './App.css'
import NavBar from './components/Nav'
import Productos from './components/Products'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {


  return (
   <main className='w-full min-h-screen bg-[#CCCCCC] flex'>
    <NavBar />
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App

