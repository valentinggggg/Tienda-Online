
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Productos from './components/Products'

function App() {


  return (
   <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Productos/>}/>
    </Routes>
    </div>
  )
}

export default App
