import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { currentUser } from './store/thunks/currentUser'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(currentUser())
  })

  return <>
  <Routes>
    <Route path='/' element={<Navigation/>} >
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
  </>
}

export default App