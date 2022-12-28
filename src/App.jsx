import { useState } from 'react'
import './App.css'
import NavigationBar from './Components/Navbar/Navbar'
import TrendingSlider from './Components/TrendingSlider/TrendingSlider'
import Popular from './Components/Popular/Popular'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavigationBar/>
        <TrendingSlider/>
        <Popular/>
    </div>
  )
}

export default App
