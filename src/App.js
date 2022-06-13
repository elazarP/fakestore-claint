import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Prodect from './pages/Prodect';
import Hederr from './components/Hederr';
import Cart from './components/Cart';
import { createContext, useState } from 'react';

export const ListCar = createContext()

function App() {

  const Carts=useState([])

  return (<>
  <ListCar.Provider value={Carts}>
    <Hederr />
    <div className='ap'>
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryname' element={<Category />} />
        <Route path='/item/:id' element={<Prodect />} />
      </Routes>
    </div>
  </ListCar.Provider>
  </>
  );
}

export default App;
