import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const Nav = () => {
	return (
		<nav className="shadow-lg">
			<div className="flex justify-between align-middle lg:w-4/5 mx-auto">
				<Link to="/">
					<img
						className="h-24 w-52"
						src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*CZ6reUGSlxCxAzls5ikGkQ.png" //put logo url in context
						alt=""
					/>
				</Link>
				<ul className="flex gap-5 my-auto">
					<li className="font-semibold uppercase text-lg">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Home
						</NavLink>
					</li>
					<li className="font-semibold uppercase text-lg">
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							About
						</NavLink>
					</li>
					<li className="font-semibold uppercase text-lg">
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Contact
						</NavLink>
					</li>
					<li className="font-semibold uppercase text-lg">
						<NavLink
							to="/Github"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Github Preview
						</NavLink>
					</li>
					<li className="font-semibold uppercase text-lg">
						<NavLink
							to="/Projects"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Projects
						</NavLink>
					</li>
				</ul>
				<button className="flex h-fit my-auto gap-2 font-semibold bg-green-400 text-white px-5 py-3 rounded-lg">
					CV <FiDownload className="mt-1" />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
