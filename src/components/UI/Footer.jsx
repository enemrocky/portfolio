import { Link, NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="shadow-lg py-8">
			<div className="flex justify-between align-middle lg:w-4/5 mx-auto">
				<Link to="/">
					<p>All rights reserved, @ 2024 Enemrocky</p>
				</Link>
				<ul className="flex gap-5 my-auto">
					<li className="font-semibold uppercase text-lg">
						<NavLink to="/">
							<FaLinkedin />
						</NavLink>
					</li>
					<li className="font-semibold uppercase text-lg">
						<NavLink to="/about">
							<FaGithub />
						</NavLink>
					</li>
					<li className="font-semibold uppercase text-lg">
						<NavLink to="/contact">
							<FaXTwitter />
						</NavLink>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
