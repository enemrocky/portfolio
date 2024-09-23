import PropTypes from "prop-types";

const Card = (props) => {
	return (
		<div className="shadow-md mb-4 p-3 lg:p-6 rounded-lg">
			{props.image ? (
				<img
					src={props.image}
					className="h-52 w-full object-cover rounded-t-lg border-b-2 border-gray-200"
				/>
			) : null}
			<p className="uppercase font-medium text-center">{props.title}</p>
			<div className="text-green-500 text-center text-nowrap mt-1">
				{props.body}
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};
