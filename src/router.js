import { About } from './pages/About/AboutPage';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { StylistsPage } from './pages/Stylists/StylistsPage';
import {ServicesPage} from "./pages/Services/ServicesPage";


export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'stylists',
				element: <StylistsPage />,
			},
            {
                path: "services",
                element: <ServicesPage />,
            },
		],
	},
]);
