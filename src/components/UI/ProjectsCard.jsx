import PropTypes from "prop-types";

const ProjectCard = (props) => {
	return (
		<div className="shadow-md rounded-lg">
			{props.image ? (
				<img
					src={props.image}
					className="h-40 w-full object-cover rounded-t-lg"
				/>
			) : null}
			<p className="uppercase font-medium text-center py-3 px-6">
				{props.title}
			</p>
			<div className="text-green-500 text-center pb-5 px-2">
				{props.body}
			</div>
		</div>
	);
};

export default ProjectCard;

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};
