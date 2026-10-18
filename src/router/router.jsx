import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProductsPage from '../pages/ProductsPage'
import ProductsDetailsPage from '../pages/ProductsDetailsPage'
import NotFoundPage from '../pages/NotFoundPage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import CartPage from '../pages/CartPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            children: [
                {path: '/', element: <HomePage />},
                {path: '/products', element: <ProductsPage />},
                {path: '/product-details/:productName', element: <ProductsDetailsPage />},
                {path: '/cart', element: <CartPage />},
                {path: '/about', element: <AboutPage />},
                {path: '*', element: <NotFoundPage />}
            ]
        },
        {
            element: <AuthLayout />,
            children: [
                {path: '/signin', element: <SigninPage />},
                {path: '/signup', element: <SignupPage />}
            ]
        }
    ],
    basename: "/Navidtronic/"
)

export default router