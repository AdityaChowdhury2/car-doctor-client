import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navbar = () => {
	const navLink = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar h-28 mb-4">
			<div className="navbar-start">
				<Link to={'/'} className="normal-case text-xl">
					<Logo />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navLink}</ul>
			</div>
			<div className="navbar-end gap-4">
				<a className="btn border-orange-500 capitalize text-orange-500 hover:bg-orange-500 text hover:text-orange-50">
					Appointment
				</a>
				<div className="dropdown dropdown-end ">
					<label
						tabIndex={0}
						className="btn btn-ghost bg-zinc-200 hover:bg-zinc-300 lg:hidden hover:border-transparent"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm bg-slate-50 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
					>
						{navLink}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
