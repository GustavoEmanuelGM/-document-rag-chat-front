import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Documentos from "../pages/Documentos"
import Tags from "../pages/Tags"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documentos" element={<Documentos />} />
      <Route path="/tags" element={<Tags />} />
    </Routes>
  )
}

export default AppRoutes