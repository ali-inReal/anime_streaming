import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
