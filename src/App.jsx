import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
