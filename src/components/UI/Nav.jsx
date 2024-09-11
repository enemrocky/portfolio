import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
	const [showLinks, setShowLinks] = useState("hidden");

	// show or hide navlinks on mobile
	const handleClick = () => {
		if (showLinks === "hidden") {
			setShowLinks("block");
		} else {
			setShowLinks("hidden");
		}
	};

	return (
		<nav className="shadow-lg">
			<div className="flex content-center justify-between lg:w-4/5 mx-auto py-4  max-lg:hidden">
				<Link to="/" className="my-auto basis-1">
					{/* <img
						className="h-18 w-32"
						src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*CZ6reUGSlxCxAzls5ikGkQ.png" //put logo url in context
						alt=""
					/> */}
					<p className="text-xl">ENEMROCKY</p>
				</Link>
				<ul className="flex font-semibold uppercase gap-5 text-lg my-auto">
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
							to="/Projects"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Projects
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
							to="/contact"
							className={({ isActive }) =>
								isActive ? "text-green-500" : "text-gray-600"
							}>
							Contact
						</NavLink>
					</li>
				</ul>
				<button className="flex content-center h-fit gap-2 font-semibold bg-green-400 text-white px-5 py-3 rounded-lg my-auto basis-1">
					CV <FiDownload className="mt-1" />
				</button>
			</div>

			{/* mobile view */}
			<div className="lg:hidden p-6">
				<div className="flex content-center justify-between">
					<Link to="/">
						{/* <img
							className="h-18 w-32"
							src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*CZ6reUGSlxCxAzls5ikGkQ.png" //put logo url in context
							alt=""
						/> */}
						<p>ENEMROCKY</p>
					</Link>
					<div onClick={handleClick}>
						<svg
							className="h-6 w-6"
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
					</div>
				</div>
				<ul
					className={`flex ${showLinks} flex-col text-gray-600 ms-2 font-semibold uppercase gap-3 py-8 text-lg"`}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/Github">Github Preview</NavLink>
					</li>
					<li>
						<NavLink to="/Projects">Projects</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
