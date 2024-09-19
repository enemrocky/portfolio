import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";

const Footer = () => {
	const { linkedInURL } = useContext(LinkURLContext);
	const { githubURL } = useContext(LinkURLContext);
	const { xTwitterURL } = useContext(LinkURLContext);

	return (
		<footer className="border-solid border-t-2 border-gray-100 py-8">
			<div className="flex justify-between align-middle lg:w-4/5 mx-6 lg:mx-auto">
				<Link to="/">
					<p>All rights reserved, @ 2024 Enemrocky</p>
				</Link>
				<ul className="flex font-semibold gap-5 my-auto">
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
		</footer>
	);
};

export default Footer;
