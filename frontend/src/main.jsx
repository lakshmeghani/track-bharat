import { createRoot } from 'react-dom/client';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import SingleGPS from './components/SingleGPS.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gps" element={<SingleGPS />} />
    </Routes>
  </BrowserRouter>,
)
