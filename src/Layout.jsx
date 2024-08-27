import { Outlet } from "react-router-dom";
import Header from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
