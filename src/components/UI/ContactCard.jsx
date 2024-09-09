import PropTypes from "prop-types";

const ContactCard = (props) => {
	return (
		<div className="shadow-md mb-4 p-6 rounded-lg">
			<p className="uppercase font-medium text-center">{props.title}</p>
			<div className="text-green-500 text-center text-nowrap mt-1">
				{props.body}
			</div>
		</div>
	);
};

export default ContactCard;

ContactCard.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};
