import PropTypes from 'prop-types';
import { BsArrowRightShort } from 'react-icons/bs';
const ServiceCard = ({ service }) => {
	const { title, img, price } = service;
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure className="px-10 pt-10 ">
				<img src={img} alt={`${title}'s image`} className="rounded-xl h-52" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>

				<div className="card-actions items-center text-xl text-orange-500 font-bold">
					<p>{price}</p>
					<button>
						<BsArrowRightShort size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.object.isRequired,
};

export default ServiceCard;
