import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { UserAuthContextProvider } from './components/context/UserAuthContext'
import ProtectedRoute from './components/context/ProtectedRoute'
import Movies from './components/Library/Movies'
import Series from './components/Library/Series'
import Others from './components/Library/Others'
function App({pageProps}) {
  
  return (
    <>
<UserAuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
       <Route path="/movies" element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
       <Route path="/series" element={<ProtectedRoute><Series/></ProtectedRoute>}/>
       <Route path="/others" element={<ProtectedRoute><Others/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>

    </UserAuthContextProvider>
    </>
  )
}

export default App
