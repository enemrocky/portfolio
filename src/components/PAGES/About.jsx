import { useContext } from "react";
import { ImagesContext } from "../CONTEXT/ImagesContext";

const About = () => {
	const { languagesImage } = useContext(ImagesContext);

	return (
		//   2skills, 3technologies and 1intro of self

		<div className="text-center flex flex-col gap-4 mx-auto my-8">
			<h2 className="text-2xl lg:text-4xl font-bold"> ⛷ Enemrocky </h2>
			<h3 className="text-xl lg:text-3xl font-semibold">
				Software Engineer / Web Developer
			</h3>
			<p className="w-3/5 lg:text-xl mx-auto mt-3 mb-8">
				Diligent software engineer with heavy focus on front-end modules
				and processes. Builds beautiful and functional sites using
				modern technologies like JavaScript, Bootstrap, Html & CSS.
				Individual who is energetic, achievement-driven, and
				number-rich.
			</p>
			<h3 className="text-xl lg:text-3xl font-semibold mb-4">
				🧰 Languages and Tools
			</h3>

			<div className="flex mx-auto gap-3">
				{languagesImage.map((image, index) => (
					<img key={index} width="90px" src={image} />
				))}
			</div>

			{/* Bars section */}
			<section className="my-10">
				<div className="graphs flex mx-auto justify-between">
					<div className="left-bars w-1/2 pl-6 lg:pl-32 pr-2 lg:pr-6">
						{/* <p>React</p> */}
						<div className="bg-green-100 rounded-md">
							<div className="bg-green-400 w-1/2 h-3 mb-2 rounded-md"></div>
						</div>
						{/* <p>HtML</p> */}
						<div className="bg-red-100 rounded-md">
							<div className="bg-red-400 w-2/3 h-3 mb-2 rounded-md"></div>
						</div>
						{/* <p>CSS</p> */}
						<div className="bg-blue-100 rounded-md">
							<div className="bg-blue-400 w-1/2 h-3 rounded-md"></div>
						</div>
					</div>

					<div className="right-side h-5 w-1/2 p-6 pr-6 lg:pr-32 bg-blue-50">
						rightside
					</div>
				</div>
				{/* Other sections here !!! */}
			</section>
			{/* [![GitHub Streak](https://streak-stats.demolab.com?user=enemrocky&theme=highcontrast&hide_border=true&fire=1B4EDD&ring=1BDD56&currStreakLabel=17DD4B)](https://git.io/streak-stats)
		![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=enemrocky&theme=highcontrast&hide_border=true&langs_count=8)  */}
		</div>
	);
};

export default About;
