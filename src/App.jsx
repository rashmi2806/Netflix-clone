import Home from "./pages/Home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from './pages/Login/Login'
import Player from "./pages/Player/Player"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Login In");
        navigate('/')
      }else{
        console.log("Logged Out");
        navigate('/login')
      }
    })
  },[])

  return (
    <>
    <ToastContainer theme="dark"/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/player/:id" element={<Player></Player>}></Route>
    </Routes>
      
    </>
  )
}

export default App
