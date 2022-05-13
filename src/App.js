import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import GroupsContainer from './components/GroupsContainer'
import { MundialProvider } from './context/mundialContext'
import Users from './components/Users'
import Prueba from './components/Prueba'
import GroupsContainer from './components/GroupsContainer'

function App() {
  return (
    <MundialProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/prueba" element={<Prueba />} />
          <Route path="/gc" element={<GroupsContainer />} />
        </Routes>
      </BrowserRouter>
    </MundialProvider>
  )
}

export default App
