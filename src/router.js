import { About } from './pages/About/AboutPage';
import App from './App';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { StylistsPage } from './pages/Stylists/StylistsPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { Contacts } from './pages/ContactUs/ContactPage';
import { MyCalendar } from './pages/Book/Calendar';
import { VideoPage } from './pages/VideoPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'landing',
				element: <VideoPage />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'stylists',
				element: <StylistsPage />,
			},

			{
				path: 'services',
				element: <ServicesPage />,
			},

			{
				path: 'contact',
				element: <Contacts />,
			},
			{
				path: 'book',
				element: <MyCalendar />,
			},
			{
				path: '',
				element: <Navigate to={'/landing'} />,
			},
		],
	},
]);
