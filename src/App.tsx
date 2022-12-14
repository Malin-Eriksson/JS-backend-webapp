import React from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import CategoriesView from './views/CategoriesView';
import CompareView from './views/CompareView';
import ContactView from './views/ContactView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductsView from './views/ProductsView';
import SearchView from './views/SearchView';
import WishlistView from './views/WishlistView';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import ApiView from './views/ApiView'
import UpdateProductView from './views/UpdateProductView';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
    <ProductProvider>
      <Routes>
        <Route path='/' element={<HomeView />}/>
        <Route path='/categories' element={<CategoriesView />}/>
        <Route path='/products' element={<ProductsView />}/>
        <Route path='/products/:id' element={<ProductDetailsView />}/>
        <Route path='/contact' element={<ContactView />}/>
        <Route path='/search' element={<SearchView />}/>
        <Route path='/compare' element={<CompareView />}/>
        <Route path='/wishlist' element={<WishlistView />}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/signup' element={<SignUpView/>}/>
        <Route path='/api' element={<ApiView />}/>
        <Route path='/update' element={<UpdateProductView/>}/>
        <Route path='*' element={<NotFoundView />}/>
      </Routes>
    </ProductProvider>
    </ShoppingCartProvider>
  </BrowserRouter>
  );
}
  
export default App;
