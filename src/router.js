import {About} from "./pages/About/AboutPage";
import App from './App';
import {
    createBrowserRouter,
} from "react-router-dom";
import {ServicesPage} from "./pages/services/ServicesPage";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About />,
            },
            {
                path: "services",
                element: <ServicesPage />,
            },
        ]
    },


]);