
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Liked from './Liked/Liked'
import SinglePage from './SinglePage/SinglePage'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/liked' element={<Liked/>} />
        <Route path='/single/:id' element={<SinglePage/>} />
    </Routes>
  )
}

export default RouteController