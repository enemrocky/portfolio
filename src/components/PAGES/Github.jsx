import { useContext } from "react";
import { NavLink } from "react-router-dom";
import contributions from "../../assets/contributions.png";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";

const Github = () => {
	const { githubReposURL, githubAvatarURL, githubNameURL } =
		useContext(LinkURLContext);

	return (
		<div className="flex flex-col content-center w-4/5 mx-auto py-14 text-center">
			<h1 className="text-3xl lg:text-5xl text-center mb-10">
				Visit My Github
			</h1>
			<img
				src={githubAvatarURL}
				className="rounded-full w-48 lg:w-80 shadow-xl mx-auto"
			/>
			<div className="w-80 mb-8 mt-4 capitalize mx-auto">
				<h1 className="mb-2 font-semibold text-2xl">{githubNameURL}</h1>
				<NavLink
					to={githubReposURL}
					target="_blank"
					className="text-green-500">
					Visit my repositories
				</NavLink>
			</div>
			<img
				src={contributions}
				alt="graph of github contributions"
				className="w-full lg:w-3/5 mx-auto mt-2 lg:mt-6"
			/>
		</div>
	);
};

export default Github;
