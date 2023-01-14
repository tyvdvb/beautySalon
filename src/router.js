import {About} from "./pages/About/AboutPage";
import App from './App';
import {
    createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About />,
            },
        ]
    },


]);