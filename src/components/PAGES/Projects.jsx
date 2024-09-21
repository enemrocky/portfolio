import ProjectCard from "../UI/ProjectsCard";

const Projects = () => {
	return (
		<div className="my-16">
			<h1 className="text-center text-5xl mb-16">
				What I Have Worked On
			</h1>
			<div className="grid grid-cols-3 gap-8 w-4/5 mx-auto">
				<div className="">
					<ProjectCard
						image="https://images.pexels.com/photos/15005252/pexels-photo-15005252/free-photo-of-green-plant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600"
						title="WeatherApp"
						body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt?"
					/>
				</div>
				<div className="">
					<ProjectCard
						title="WeatherApp"
						body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt?"
					/>
				</div>
				<div className="">3</div>
				<div className="">
					<ProjectCard
						title="WeatherApp"
						body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt?"
					/>
				</div>
				<div className="">
					<ProjectCard
						title="WeatherApp"
						body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt?"
					/>
				</div>
				<div className="">3</div>
			</div>
		</div>
	);
};

export default Projects;
