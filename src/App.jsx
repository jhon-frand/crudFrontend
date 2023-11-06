  import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Update from "./components/Update"
import Register from "./components/Register"
import Show from "./components/Show"
  
  export default function App() {
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/show/:id" element={<Show/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/update/:id" element={<Update/>} />
      </Routes>
      </BrowserRouter>
      </>
    )
  }


