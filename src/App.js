import './App.css';
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductsPage from './Pages/ProductsPage';
import ProductsDetailsPage from './Pages/ProductsDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';
import SignupPage from './Pages/SignupPage';
import SigninPage from './Pages/SigninPage';
import DashboardPage from './Pages/DashboardPage';
import AdminPage from './Pages/AdminPage';
import ProfilePage from './Pages/ProfilePage';
import UsersPage from './Pages/UsersPage'
import AddProductPage from './Pages/AddProductPage'
import ManageProductsPage from './Pages/ManageProductsPage';
import AllOrdersPage from './Pages/AllOrdersPage';
import UserOrdersPage from './Pages/UserOrdersPage';
import CartPage from './Pages/CartPage';

function App() {

  useEffect(() => {
    localStorage.getItem('navcart') || localStorage.setItem('navcart', JSON.stringify([]))
    return () => {}
  },[])
  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product-details/:productID' element={<ProductsDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/dashboard/:userID' element={<DashboardPage />} >
            <Route path='profile' element={<ProfilePage />} />
            <Route path='orders' element={<UserOrdersPage />} />
          </Route>
          <Route path='/admin/:userID' element={<AdminPage />}>
            <Route path='profile' element={<ProfilePage />} />
            <Route path='users' element={<UsersPage />} />
            <Route path='add-product' element={<AddProductPage />} />
            <Route path='manage-products' element={<ManageProductsPage />} />
            <Route path='all-orders' element={<AllOrdersPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;