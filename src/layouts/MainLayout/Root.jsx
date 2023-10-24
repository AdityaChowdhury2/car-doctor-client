import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const Root = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<ScrollRestoration />
			<Footer />
		</div>
	);
};

export default Root;
