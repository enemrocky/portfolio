import ProjectCard from "../UI/ProjectsCard";
import { projectData } from "../DATA/ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<div className="my-12">
			<h1 className="text-center text-5xl mb-16">
				What I Have Worked On
			</h1>
			<div className="grid lg:grid-cols-3 gap-12 w-4/5 mx-auto">
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
