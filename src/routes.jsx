import { BrowserRouter, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}