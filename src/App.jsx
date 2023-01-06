import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Level from './components/Level'
import { getAllInfo, getLevelInfo } from './firebase/databaseFunctions'
function App() {
  const [levels, setLevels] = useState([])
  useEffect(() => {
    const getLevels = async () => {
      const data = await getAllInfo()
      setLevels(data)
    }
    getLevels()
  }, []);
 return (
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Home levels={levels}/>}/>
    <Route path='/leaderboards' element={<LeaderBoard/>}/>
    <Route path='/level/:id' element={<Level/>}/>
  </Routes>
  </BrowserRouter>
 )
}

export default App
