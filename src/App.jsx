import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import Sobre from './paginas/Sobre/Sobre.tsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header></Header> 
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}
