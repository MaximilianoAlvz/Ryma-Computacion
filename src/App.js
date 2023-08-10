import './App.css';
import Navbar from './Componentes/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Componentes/pages/home';
import ProductosPage from './Componentes/pages/productos';
import ItemPage from './Componentes/pages/productos/item-page/item-page';
import CarritoContext from './context';
import CarritoContainer from './Componentes/pages/carrito';
import CheckoutContainer from './Componentes/pages/checkout';

const App = () => {
  return (
      <BrowserRouter>
        <CarritoContext>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/productos/:categoria/:page' element= {<ProductosPage/>} />
        <Route path='/producto/:id' element= {<ItemPage/>} />
        <Route path='/carrito' element= {<CarritoContainer/>} />
        <Route path='/checkout' element= {<CheckoutContainer/>} />
      </Routes>
      </CarritoContext>
      </BrowserRouter>
  );
}

export default App;
