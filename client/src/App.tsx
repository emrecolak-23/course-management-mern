import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'

const Dashboard = () => {
  return <h1>Dashboard Page</h1>
}

function App() {
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