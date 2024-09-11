import { useContext } from "react";
import { NavLink } from "react-router-dom";
import contributions from "../../assets/contributions.png";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";

//show git profile essentials and repositories
const Github = () => {
	const { githubReposURL } = useContext(LinkURLContext);
	const { githubAvatarURL } = useContext(LinkURLContext);
	const { githubNameURL } = useContext(LinkURLContext);

	return (
		<div className="flex flex-col content-center w-4/5 mx-auto py-10 text-center">
			<img
				src={githubAvatarURL}
				className="rounded-full w-80 shadow-xl mx-auto"
			/>
			<div className="w-80 mb-8 mt-4 capitalize mx-auto">
				<h1 className="mb-1 font-semibold text-lg">{githubNameURL}</h1>
				<NavLink
					to={githubReposURL}
					target="_blank"
					className="text-green-500">
					Visit my repositories
				</NavLink>
			</div>
			<img src={contributions} alt="graph of github contributions" />
		</div>
	);
};

export default Github;
