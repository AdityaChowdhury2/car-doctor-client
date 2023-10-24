import toast from 'react-hot-toast';
import authImage from '../../assets/images/login/login.svg';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
	const { createUser, updateUserProfile, user } = useAuth();
	const handleSignUp = async e => {
		try {
			e.preventDefault();
			const formData = new FormData(e.target);
			const user = {};
			for (const data of formData.entries()) {
				user[data[0]] = data[1];
			}
			const response = await createUser(user);
			try {
				if (response.user) {
					await updateUserProfile(user);
					toast.success('User name updated');
				}
			} catch (err) {
				console.log(err);
			}
			toast.success('User created successfully');
		} catch (err) {
			toast.error('Error in creating user');
		} finally {
			console.log(user);
		}
	};

	return (
		<div className="hero min-h-[calc(100vh - 136px)] bg-base-200">
			<div className="max-w-7xl flex flex-col items-center justify-center gap-16 p-5 lg:flex-row gap">
				<div className="lg:w-2/5">
					<img src={authImage} alt="" className=" " />
				</div>
				<div className="card flex-auto shadow-2xl w-full lg:p-20 md:p-8 p-4 lg:w-3/5">
					<form className="card-body p-0 w-full" onSubmit={handleSignUp}>
						<h1 className="text-center font-bold text-5xl text-stone-600">
							Sign Up
						</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="name"
								placeholder="name"
								name="name"
								className="input input-bordered border-gray-300 hover:outline-gray-300 focus:outline-gray-300"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input input-bordered border-gray-300 hover:outline-gray-300 focus:outline-gray-300"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="input input-bordered border-gray-300 hover:outline-gray-300 focus:outline-gray-300"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="bg-orange-500 text-orange-50 btn hover:border-transparent border-transparent hover:bg-orange-600 transition-colors capitalize text-lg">
								Sign Up
							</button>
						</div>
					</form>
					<div className="text-center mt-5">
						<p>Or Sign In with</p>
						<div className="flex justify-center gap-4 mb-12 mt-7">
							<button className="btn btn-circle border-none hover:bg-zinc-300 bg-zinc-200 ">
								<BiLogoFacebook size={24} color="#3B5998" />
							</button>
							<button className="btn btn-circle border-none hover:bg-zinc-300 bg-zinc-200">
								<FaLinkedinIn size={24} color="#0A66C2" />
							</button>
							<button className="btn btn-circle border-none hover:bg-zinc-300 bg-zinc-200">
								<FcGoogle size={24} />
							</button>
						</div>
						<p>
							Have an account?{' '}
							<Link to={'/login'} className="text-orange-500 font-bold">
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
