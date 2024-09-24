/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				showcase: `url("https://images.pexels.com/photos/15005252/pexels-photo-15005252/free-photo-of-green-plant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600")`,
			},
			boxShadow: {
				md: ".5px .5px 5px .5px rgba(0, 0, 0, 0.1)",
				lg: ".7px .7px 7px .7px rgba(0, 0, 0, 0.1)",
				xl: "2px 2px 10px 2px rgba(0, 0, 0, 0.1)",
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};

// https://images.pexels.com/photos/15005252/pexels-photo-15005252/free-photo-of-green-plant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600
// https://videos.pexels.com/video-files/5453622/5453622-uhd_2560_1440_24fps.mp4
