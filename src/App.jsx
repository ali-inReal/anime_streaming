import {  useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup/Signup'
import Details from './Pages/Details/Details'
import Search from './Pages/Search/Search'
import Popular from './Pages/Popular/Popular'
import {UserContext} from './Context'
import AdminPanel from './Pages/AdminPanel/AdminPanel'
import Edit from './Pages/AdminPanel/Edit/Edit'
import AddAnime from './Pages/AdminPanel/AddAnime/AddAnime'
function App() {
  const [login, setLogin] = useState("")
  const [admin,setAdmin] = useState("");
  return (
    <UserContext.Provider value={{login,setLogin,admin,setAdmin}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/admin' element={<AdminPanel/>} />
        <Route path='/edit_anime' element={<Edit/>} />
        <Route path='/add_anime' element={<AddAnime/>} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
