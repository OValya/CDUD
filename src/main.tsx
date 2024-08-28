import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import CreateProduct from "./pages/Create-product.tsx";
import Product from "./pages/Product.tsx";
import ErrorPage from "./pages/Error-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/create-product",
        element: <CreateProduct/>
    },
    {
        path: "product/:id",
        element: <Product/>
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
    

])


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
