/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				showcase: `url("https://images.pexels.com/photos/15005252/pexels-photo-15005252/free-photo-of-green-plant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600")`,
			},
		},
	},
	plugins: [],
};
