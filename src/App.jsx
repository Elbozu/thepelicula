import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import DetallePelicula from "./pages/DetallePelicula";
import NotFound from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/detalle/:id" element={<DetallePelicula/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
