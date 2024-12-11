import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categorias from './paginas/categorias/Categorias.tsx';
import PaginaPrincipal from './paginas/paginaprincipal/PaginaPrincipal.tsx';
import Receitas from './paginas/receitas/Receitas.tsx';
import Ingredientes from './paginas/ingredientes/Ingredientes.tsx';
import Sobre from './paginas/sobre/Sobre.tsx';
import CriarReceitas from './paginas/CriarReceitas/Criar-receitas.tsx';
import CriarIngredientes from './paginas/criaringredientes/CriarIngredientes.tsx';
import Receita from './paginas/receita/Receita.tsx';

export default function App() {
  return (
    <Router>
      <Header></Header> 
      <main>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<PaginaPrincipal />}/>
          <Route path="/receitas/:nomeCategoria" element={<Receitas />}/>
          <Route path="/receita/:nomeReceita" element={<Receita />} key={window.location.pathname}/>
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/ingredientes" element={<Ingredientes />}/>
          <Route path="/criar-receitas" element={<CriarReceitas />}/>
          <Route path="/criar-ingredientes" element={<CriarIngredientes />}/>
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  )
}
