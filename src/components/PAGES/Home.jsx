import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
	return (
		<div className="flex flex-col h-screen bg-showcase bg-no-repeat bg-cover justify-center text-white">
			<div className="mx-auto -mt-80 text-4xl">
				hi my name is ENEMROCKY
			</div>
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
	);
};

export default Home;
