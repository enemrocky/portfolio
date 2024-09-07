import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
	const { linkedInURL } = useContext(LinkURLContext);
	const { githubURL } = useContext(LinkURLContext);
	const { xTwitterURL } = useContext(LinkURLContext);

	return (
		<>
			<div className="flex flex-col h-screen bg-showcase bg-no-repeat bg-cover justify-center text-white">
				<div className="mx-auto -mt-80 text-4xl">
					<p>hi my name is ENEMROCKY</p>
				</div>
				<ul className="flex font-semibold uppercase flex-col gap-3 absolute right-0 mr-12 text-3xl">
					<li>
						<abbr title="LinkedIn">
							<NavLink to={linkedInURL} target="_blank">
								<FaLinkedin />
							</NavLink>
						</abbr>
					</li>
					<li>
						<abbr title="Github">
							<NavLink to={githubURL} target="_blank">
								<FaGithub />
							</NavLink>
						</abbr>
					</li>
					<li>
						<abbr title="Twitter">
							<NavLink to={xTwitterURL} target="_blank">
								<FaXTwitter />
							</NavLink>
						</abbr>
					</li>
				</ul>
			</div>
			<About /> {/* show all the pages in the home page*/}
			<Contact /> {/* show all the pages in the home page*/}
		</>
	);
};

export default Home;
