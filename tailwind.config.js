import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			keyframes: {
				wall: {
					"0%": {
						transform: "scale(0.5)",
					},
					"50%": {
						transform: "scale(1.5)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
