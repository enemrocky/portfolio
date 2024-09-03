import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";

const Home = () => {
	const { linkedInURL } = useContext(LinkURLContext);
	const { githubURL } = useContext(LinkURLContext);
	const { xTwitterURL } = useContext(LinkURLContext);

	return (
		<div className="flex flex-col h-screen bg-showcase bg-no-repeat bg-cover justify-center text-white">
			<div className="mx-auto -mt-80 text-4xl">
				<p>hi my name is ENEMROCKY</p>
			</div>
			<ul className="flex flex-col gap-3 absolute right-0 mr-12 text-3xl">
				<li className="font-semibold uppercase">
					<abbr title="LinkedIn">
						<NavLink to={linkedInURL} target="_blank">
							<FaLinkedin />
						</NavLink>
					</abbr>
				</li>
				<li className="font-semibold uppercase">
					<abbr title="Github">
						<NavLink to={githubURL} target="_blank">
							<FaGithub />
						</NavLink>
					</abbr>
				</li>
				<li className="font-semibold uppercase">
					<abbr title="Twitter">
						<NavLink to={xTwitterURL} target="_blank">
							<FaXTwitter />
						</NavLink>
					</abbr>
				</li>
			</ul>
		</div>
	);
};

export default Home;
