// import { ImagesContext } from "./ImagesContext";
import PropTypes from "prop-types";
import { createContext } from "react";

export const ImagesContext = createContext();

export const ImagesContextProvider = ({ children }) => {
	const languagesImage = [
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
	];

	return (
		<ImagesContext.Provider value={{ languagesImage }}>
			{children}
		</ImagesContext.Provider>
	);
};

ImagesContextProvider.propTypes = {
	children: PropTypes.any.isRequired,
};
