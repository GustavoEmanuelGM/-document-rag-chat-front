import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Documentos from "./pages/Documentos";
import Sidebar from "./components/sidebar";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;