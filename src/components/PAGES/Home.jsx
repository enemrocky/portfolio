import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import { useContext } from "react";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";

const Home = () => {
	const { linkedInURL, githubURL, xTwitterURL } = useContext(LinkURLContext);

	return (
		<>
			<div className="flex flex-col h-[90vh] bg-showcase bg-no-repeat bg-cover justify-center text-white">
				<div className="mx-auto -mt-10 lg:-mt-20 font-semibold text-center">
					<h1 className="text-5xl lg:text-8xl">ENEMROCKY</h1>

					{/* LINKS */}
					<ul className="flex lg:text-3xl m-auto align-center justify-center">
						<li className="text-gray-500 text-4xl lg:text-9xl ">
							<IoRemoveOutline />
						</li>
						<ul className="flex my-auto lg:gap-3">
							<li className="p-2 rounded-full lg:border-solid lg:border-2 border-white">
								<abbr title="LinkedIn">
									<NavLink to={linkedInURL} target="_blank">
										<FaLinkedin />
									</NavLink>
								</abbr>
							</li>
							<li className="p-2 rounded-full lg:border-solid lg:border-2 border-white">
								<abbr title="Github">
									<NavLink to={githubURL} target="_blank">
										<FaGithub />
									</NavLink>
								</abbr>
							</li>
							<li className="p-2 rounded-full lg:border-solid lg:border-2 border-white">
								<abbr title="Twitter">
									<NavLink to={xTwitterURL} target="_blank">
										<FaXTwitter />
									</NavLink>
								</abbr>
							</li>
						</ul>
						<li className="text-gray-500 text-4xl lg:text-9xl">
							<IoRemoveOutline />
						</li>
					</ul>

					<p className="text-3xl lg:text-5xl">SOFTWARE ENGINEER</p>
				</div>
			</div>
		</>
	);
};

export default Home;
