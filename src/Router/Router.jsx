import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/MainLayout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SecondaryLayout from '../layouts/SecondaryLayout/SecondaryLayout';
import SignUp from '../pages/SignUp/SignUp';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
	{
		path: '/',
		element: <SecondaryLayout />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <SignUp />,
			},
		],
	},
]);
export default Router;
