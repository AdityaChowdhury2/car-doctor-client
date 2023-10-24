import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../Shared/Spinner/Spinner';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
	const {
		data: services,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const response = await axios.get('/services.json');
			return response.data;
		},
	});

	return (
		<div>
			<div className="text-center my-12">
				<h4 className="text-3xl text-orange-500">Our Service</h4>
				<h2 className="text-5xl">Our Services Area</h2>
				<p>
					the majority have suffered alteration in some form, by injected
					humour, or randomised <br /> words which don&apos;t look even slightly
					believable.
				</p>
			</div>
			{isLoading && <Spinner />}
			{isError && (
				<div className="flex justify-center items-center h-[30vh]">
					<p className="text-red-500 font-bold">
						No Data Found. Please Try again later.
					</p>
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services?.map(service => (
					<ServiceCard key={service._id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
