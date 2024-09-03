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
		<footer className="shadow-lg py-8">
			<div className="flex justify-between align-middle lg:w-4/5 mx-auto">
				<Link to="/">
					<p>All rights reserved, @ 2024 Enemrocky</p>
				</Link>
				<ul className="flex gap-5 my-auto">
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
		</footer>
	);
};

export default Footer;
