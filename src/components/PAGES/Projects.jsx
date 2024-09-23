import ProjectCard from "../UI/ProjectsCard";
import { projectData } from "../DATA/ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<div className="my-12">
			<h1 className="text-center text-3xl lg:text-5xl mb-8 lg:mb-16">
				What I Have Worked On
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mx-auto">
				{projectData.map((project, index) => (
					<Link to={project.srcURL} key={index} target="_blank">
						<ProjectCard
							imageSrc={project.thumbnail}
							title={project.title}
							techStack={project.techStack}
							body={project.description}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Projects;
