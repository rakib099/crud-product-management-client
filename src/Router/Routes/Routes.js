import { createBrowserRouter } from "react-router-dom";
import Add from "../../Components/Add";
import Home from "../../Components/Home";
import Update from "../../Components/Update";
import Main from "../../Layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/products/${params.id}`);
                }
            }
        ]
    }
]);

export default router;