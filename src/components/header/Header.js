import Navbar from './navigationBar';
import './style.scss';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

export const Header = () => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
	return (
		<header>
			<div
				className="logoNavContainer"
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<a href={'/landing'} className="logo">
					Magni·fique
				</a>

				<Navbar />
			</div>

			{isAuthenticated ? (
				<Button
					onClick={() => {
						logout();
					}}
				>
					{' '}
					Log out
				</Button>
			) : (
				<Button
					onClick={() => {
						loginWithRedirect();
					}}
				>
					{' '}
					Log in
				</Button>
			)}
		</header>
	);
};
