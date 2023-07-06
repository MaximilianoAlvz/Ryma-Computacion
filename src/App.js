import './App.css';
import Navbar from './Componentes/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Componentes/pages/home';
import ProductosPage from './Componentes/pages/productos';
import ItemPage from './Componentes/pages/productos/item-page/item-page';

const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/productos/:categoria' element= {<ProductosPage/>} />
        <Route path='/producto/:id' element= {<ItemPage/>} />
        <Route path='/carrito' element= {<HomePage/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
