import { Link } from 'react-router-dom';

export const navigationBarItems = [
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Services',
		url: '/services',
		submenu: [
			{
				key: '1',
				label: (
					<Link rel="noopener noreferrer" to={'/services?scrollTo=hair'}>
						Hair
					</Link>
				),
			},
			{
				key: '2',
				label: (
					<Link rel="noopener noreferrer" to={'/services?scrollTo=nails'}>
						Nails
					</Link>
				),
			},
			{
				key: '3',
				label: (
					<Link rel="noopener noreferrer" to={'/services?scrollTo=makeup'}>
						Makeup+Brows
					</Link>
				),
			},
			{
				key: '4',
				label: (
					<Link rel="noopener noreferrer" to={'/services?scrollTo=wax'}>
						Wax It
					</Link>
				),
			},
		],
	},
	{
		title: 'Stylists',
		url: '/stylists',
	},
	{
		title: 'Contact Us',
		url: '/contact',
	},
	{
		title: 'Book Now',
		url: '/book',
	},
];
