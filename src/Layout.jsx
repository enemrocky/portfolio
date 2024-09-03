import { LinkURLProvider } from "./components/CONTEXT/LinkURLProvider";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

const Layout = () => {
	return (
		<div>
			<LinkURLProvider>
				<Header />
				<Outlet />
				<Footer />
			</LinkURLProvider>
		</div>
	);
};

export default Layout;
