import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const authDomain = 'dev-q5b5uob47da25tah.eu.auth0.com';
const clientID = 'wpAZBYYe441bvnUgWuBIJS4KHyeTebuJ';

root.render(
	<React.StrictMode>
		<Auth0Provider
			authorizationParams={{
				redirect_uri: `${window.location.origin}/landing`,
			}}
			domain={authDomain}
			clientId={clientID}
			useRefreshTokens
			cacheLocation="localstorage"
		>
			<RouterProvider router={router} />
		</Auth0Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
