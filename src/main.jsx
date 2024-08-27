import { createRoot } from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Contact from "./components/PAGES/Contact";
import About from "./components/PAGES/About";
import Projects from "./components/PAGES/Projects";
import Github from "./components/PAGES/Github";
import Home from "./components/PAGES/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<Layout />}>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="github" element={<Github />} />
			<Route path="projects" element={<Projects />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
