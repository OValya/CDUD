import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CreateProduct from "./pages/Create-product.tsx";
import ErrorPage from "./pages/Error-page.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import ProductPage from "./pages/Product-page.tsx";

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
        element: <ProductPage/>
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
