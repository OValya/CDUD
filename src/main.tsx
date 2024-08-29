import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import CreateProduct from "./pages/Create-product.tsx";
import Product from "./pages/Product.tsx";
import ErrorPage from "./pages/Error-page.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

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
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>

    </StrictMode>,
)
