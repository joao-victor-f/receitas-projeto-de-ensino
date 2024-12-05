import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import './App.css'
import PaginaPrincipal from './paginas/PaginaPrincipal.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header></Header> 
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}
