import { LinkURLContext } from "./LinkURLContext";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const LinkURLProvider = ({ children }) => {
	useEffect(() => {
		fetch("https://api.github.com/users/enemrocky")
			.then((response) => response.json())
			.then((data) => {
				setName(data.name);
				setAvatar(data.avatar_url);
			});
	}, []);

	const [githubNameURL, setName] = useState("");
	const [githubAvatarURL, setAvatar] = useState("");

	const linkedInURL = "https://www.linkedin.com/in/enem-rocky-74238218a/";
	const githubURL = "https://github.com/enemrocky";
	const xTwitterURL = "https://x.com/Enemrocky";
	const githubReposURL = "https://github.com/enemrocky?tab=repositories";

	return (
		<LinkURLContext.Provider
			value={{
				linkedInURL,
				githubURL,
				xTwitterURL,
				githubReposURL,
				githubAvatarURL,
				githubNameURL,
			}}>
			{children}
		</LinkURLContext.Provider>
	);
};

LinkURLProvider.propTypes = {
	children: PropTypes.any.isRequired,
};
