import { LinkURLProvider } from "./components/CONTEXT/LinkURLContext";
import { ImagesContextProvider } from "./components/CONTEXT/ImagesContext";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

const Layout = () => {
	return (
		<div>
			<LinkURLProvider>
				<ImagesContextProvider>
					<Header />
					<Outlet />
					<Footer />
				</ImagesContextProvider>
			</LinkURLProvider>
		</div>
	);
};

export default Layout;
