import { LinkURLContext } from "./LinkURLContext";
import PropTypes from "prop-types";

export const LinkURLProvider = ({ children }) => {
	const linkedInURL = "https://www.linkedin.com/in/enem-rocky-74238218a/";
	const githubURL = "https://github.com/enemrocky";
	const xTwitterURL = "https://x.com/Enemrocky";

	return (
		<LinkURLContext.Provider
			value={{
				linkedInURL,
				githubURL,
				xTwitterURL,
			}}>
			{children}
		</LinkURLContext.Provider>
	);
};

LinkURLProvider.propTypes = {
	children: PropTypes.instanceOf,
};
