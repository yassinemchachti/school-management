import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sighup",
                element: <Register />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
