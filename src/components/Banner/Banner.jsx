import banner1 from '../../assets/images/banner/1.jpg';
import banner2 from '../../assets/images/banner/2.jpg';
import banner3 from '../../assets/images/banner/3.jpg';
import banner4 from '../../assets/images/banner/4.jpg';
import banner5 from '../../assets/images/banner/5.jpg';
import banner6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
	7;
	return (
		<div className="carousel w-full h-[600px]">
			<div id="slide1" className="carousel-item relative w-full">
				<img src={banner1} className="w-full rounded-xl" />
				<div className="absolute h-full w-full flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
					<div className="flex justify-center w-full text-center md:text-start md:block">
						<div className="text-slate-100 space-y-8 pl-4 md:pl-8 ">
							<h2 className="text-6xl font-bold max-w-md leading-tight">
								Affordable Price For Car Servicing
							</h2>
							<p className="text-lg">
								There are many variations of passages of available, But <br />{' '}
								the majority have suffered alteration in some form
							</p>
							<div className="space-x-5">
								<button className="bg-orange-500 text-orange-50 btn hover:border-transparent border-transparent hover:bg-orange-600 transition-colors capitalize text-lg">
									Discover More
								</button>
								<button className="btn text-orange-50 capitalize text-lg">
									Latest Project
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
					<a
						href="#slide6"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❮
					</a>
					<a
						href="#slide2"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img src={banner2} className="w-full" />
				<div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
					<a
						href="#slide1"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❮
					</a>
					<a
						href="#slide3"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img src={banner3} className="w-full" />
				<div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
					<a
						href="#slide2"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-colors  border-transparent bg-opacity-10"
					>
						❮
					</a>
					<a
						href="#slide4"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img src={banner4} className="w-full" />
				<div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
					<a
						href="#slide3"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❮
					</a>
					<a
						href="#slide5"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❯
					</a>
				</div>
			</div>
			<div id="slide5" className="carousel-item relative w-full">
				<img src={banner5} className="w-full" />
				<div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
					<a
						href="#slide4"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❮
					</a>
					<a
						href="#slide6"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❯
					</a>
				</div>
			</div>
			<div id="slide6" className="carousel-item relative w-full">
				<img src={banner6} className="w-full" />
				<div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
					<a
						href="#slide5"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❮
					</a>
					<a
						href="#slide1"
						className="btn btn-circle hover:bg-orange-500 bg-slate-50 text-white hover:border-transparent transition-all  border-transparent bg-opacity-10"
					>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
