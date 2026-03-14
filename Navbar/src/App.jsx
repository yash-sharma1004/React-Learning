import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"; 
import Contact from "./pages/Contact/Contact";
import Navbar from "./pages/Navbar";


function App() {
  return (
    <BrowserRouter>

   
  
  <Navbar/>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;