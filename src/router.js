import { About } from './pages/About/AboutPage';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { StylistsPage } from './pages/Stylists/StylistsPage';
import {Contacts} from "./pages/ContactUs/ContactPage";

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
				path: 'contact',
				element: <Contacts />,
			},
		],
	},
]);
