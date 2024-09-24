import PropTypes from "prop-types";

const ProjectCard = (props) => {
	return (
		<div className="shadow-xl rounded-lg min-h-[450px]">
			{props.imageSrc ? (
				<img
					src={props.imageSrc}
					className="h-52 w-full object-cover rounded-t-lg border-b-2 border-gray-200"
				/>
			) : null}
			<p className="uppercase font-semibold text-xl lg:text-base text-center py-3 px-6 mt-3">
				{props.title}
			</p>
			<div className="w-11/12 pb-3 flex flex-wrap gap-0 mx-auto">
				<div className="mx-auto">
					{props.techStack.map((tech, index) => (
						<span
							className="bg-green-500 px-2 text-sm lg:text-base py-1 text-white rounded-xl mr-2"
							key={index}>
							{tech}
						</span>
					))}
				</div>
			</div>
			<div className="text-center pb-5 px-4">{props.body}</div>
		</div>
	);
};

export default ProjectCard;

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	techStack: PropTypes.checkPropTypes.isRequired,
};
