import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                errorElement: <NotFound/>,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/products",
                        element: <Products />,
                    }, 
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                ]
            },
        ],
    }
]);