import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const Nav = () => {
	return (
		<nav className="shadow-lg">
			<div className="flex justify-between align-middle lg:w-4/5 mx-auto py-4">
				<Link to="/">
					<svg
						className="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<img
						className="h-18 w-32"
						src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*CZ6reUGSlxCxAzls5ikGkQ.png" //put logo url in context
						alt=""
					/>
				</Link>
				<ul className="flex font-semibold uppercase gap-5 my-auto text-lg">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Github"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Github Preview
						</NavLink>
					</li>
					<li>
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
