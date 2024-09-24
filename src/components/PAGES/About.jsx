import { useContext } from "react";
import { ImagesContext } from "../CONTEXT/ImagesContext";

const About = () => {
	const { languagesImage } = useContext(ImagesContext);

	return (
		<div className="text-center flex flex-col gap-2 lg:gap-6 mx-auto my-10 lg:my-16">
			<h2 className="text-2xl lg:text-4xl font-bold"> ⛷ Enemrocky </h2>
			<h3 className="text-xl lg:text-3xl font-semibold">
				Software Engineer / Web Developer
			</h3>
			<p className="w-4/5 lg:w-3/5 lg:text-xl mx-auto mt-3 mb-3 lg:mb-8">
				Diligent software engineer with heavy focus on front-end modules
				and processes. Builds beautiful and functional sites using
				modern technologies like ReactJS, Tailwind, Html & CSS.
				Individual who is energetic, achievement-driven, and
				number-rich.
			</p>
			<h3 className="text-xl lg:text-3xl font-semibold mb-4">
				🧰 Languages and Tools
			</h3>

			<div className="flex flex-wrap mx-auto gap-3">
				{languagesImage.map((image, index) => (
					<img
						key={index}
						className="w-[40px] md:w-[60px] lg:w-[90px]"
						width="90px"
						src={image}
					/>
				))}
			</div>

			{/* Bars section */}
			<section className="my-8 lg:my-16">
				<div className="flex flex-col lg:flex-row gap-10 mx-auto justify-between w-5/6 lg:w-full lg:px-48">
					<div className="text-left lg:w-1/2 px-1">
						<p className="font-bold">HtML</p>
						<div className="bg-red-100 rounded-md">
							<div className="bg-red-400 w-11/12 h-3 mb-4 rounded-md"></div>
						</div>
						<p className="font-bold">CSS</p>
						<div className="bg-blue-100 rounded-md">
							<div className="bg-blue-400 w-11/12 h-3 mb-4 rounded-md"></div>
						</div>
						<p className="font-bold">JS</p>
						<div className="bg-blue-100 rounded-md">
							<div className="bg-blue-400 w-10/12 h-3 mb-4 rounded-md"></div>
						</div>
						<p className="font-bold">React</p>
						<div className="bg-green-100 rounded-md">
							<div className="bg-green-400 w-7/12 h-3 rounded-md"></div>
						</div>
					</div>

					<div className="right-side h-5 lg:w-1/2 p-6 pr-6 lg:pr-32 bg-blue-50">
						rightside
					</div>
				</div>
				{/* Other sections here !!! */}
			</section>
		</div>
	);
};

export default About;
