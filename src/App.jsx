import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { UserAuthContextProvider } from './components/context/UserAuthContext'
import ProtectedRoute from './components/context/ProtectedRoute'
function App({pageProps}) {
  
  return (
    <>
<UserAuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>

    </UserAuthContextProvider>
    </>
  )
}

export default App
