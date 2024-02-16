
import './App.css'
import NavBar from './components/Nav'
import Productos from './components/Products'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
   <main className='w-full min-h-screen bg-[#CCCCCC] flex'>
    <section>
    <NavBar />
    </section>
    <section>
      <Routes>
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </section>
    </main>
  )
}

export default App

