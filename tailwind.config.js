/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";
export default {
	content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {},
	},
	plugins: [formsPlugin],
};
