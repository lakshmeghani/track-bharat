import { createRoot } from 'react-dom/client';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar.jsx';
import SingleGPS from './components/SingleGPS.jsx'
import SingleGMAPS from './components/SingleGMAPS.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/gps" element={<SingleGPS />} />
      <Route path="/gpsmaps" element={<SingleGMAPS />} />
    </Routes>
  </BrowserRouter>,
)
