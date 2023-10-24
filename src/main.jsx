import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<div className="container">
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={Router} />
					<Toaster />
				</AuthProvider>
			</QueryClientProvider>
		</React.StrictMode>
	</div>
);
