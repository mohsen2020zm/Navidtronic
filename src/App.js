import './App.css';
import { useEffect } from "react"
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductsPage from './Pages/ProductsPage';
import ProductsDetailsPage from './Pages/ProductsDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';
import SignupPage from './Pages/SignupPage';
import SigninPage from './Pages/SigninPage';
import CartPage from './Pages/CartPage';

function App() {

  useEffect(() => {
    localStorage.getItem('navcart') || localStorage.setItem('navcart', JSON.stringify([]))
    return () => {}
  },[])
  
  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product-details/:productID' element={<ProductsDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;