import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { useState, useContext, useEffect } from "react";
import { LinkURLContext } from "../CONTEXT/LinkURLContext";

const Nav = () => {
	const [showLinks, setShowLinks] = useState("hidden");
	const { githubAvatarURL, githubURL, logoURL } = useContext(LinkURLContext);

	// TODO: if showlinks is active then any click on the page show set it to hidden
	// show or hide navlinks on mobile
	const handleClick = (event) => {
		event.stopPropagation();
		showLinks === "hidden" ? setShowLinks("block") : setShowLinks("hidden");
	};

	useEffect(() => {
		if (showLinks === "block") {
			// event to hide menu on page click
			document.addEventListener("click", () => setShowLinks("hidden"));

			// event cleanup fr when component unmounts
			return () => {
				document.removeEventListener("click", () =>
					setShowLinks("hidden")
				);
			};
		}
	}, [showLinks]);

	return (
		<nav className="shadow-lg">
			<div className="flex content-center justify-between lg:w-4/5 mx-auto py-4  max-lg:hidden">
				<Link to="/" className="my-auto basis-1">
					{logoURL ? (
						<img
							className="h-18 w-32"
							//TODO: put logo url in context
							src={logoURL}
						/>
					) : (
						<p className="text-xl">ENEMROCKY</p>
					)}
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
				<div className="flex gap-4">
					<button className="flex h-fit gap-2 font-semibold bg-green-400 text-white px-5 py-3 rounded-lg my-auto basis-1">
						CV <FiDownload className="mt-1" />
					</button>
					{githubAvatarURL ? (
						<NavLink to={githubURL} target="_blank">
							<img
								src={githubAvatarURL}
								className="rounded-full w-12 shadow-lg mx-auto"
							/>
						</NavLink>
					) : null}
				</div>
			</div>

			{/* mobile view */}
			<div className="lg:hidden p-6">
				<div className="flex content-center justify-between">
					<Link to="/">
						{logoURL ? (
							<img
								className="h-18 w-32"
								//TODO: put logo url in context
								src={logoURL}
							/>
						) : (
							<p className="text-xl">ENEMROCKY</p>
						)}
					</Link>
					<div onClick={handleClick}>
						<svg
							className="h-6 w-6 cursor-pointer"
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
